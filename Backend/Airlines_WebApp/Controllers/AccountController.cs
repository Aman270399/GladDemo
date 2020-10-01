using Airlines_WebApp.Models;
using Airlines_WebApp.Repository;
using System;
using System.Collections.Generic;
using System.Collections.Specialized;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Net.Mail;
using System.Web.Http;

namespace Airlines_WebApp.Controllers
{
    [RoutePrefix("api/accounts")]
    public class AccountController : ApiController
    {
        private IAccountRepository _accountRepository;
        private IAdminAccRepo _adminAccRepo;
        public AccountController()
        {
            this._accountRepository = new AccountRepository(new GladiatorProjectEntities1());
            this._adminAccRepo = new AdminAccRepo(new GladiatorProjectEntities1());
        }
        [HttpPost]
        [Route("userlogin")]
        public IHttpActionResult VerifyLogin(Login login)
        {
            UserTable user = null;
            try
            {
                user = _accountRepository.VerifyLogin(login.Email, login.Password);
                if (user == null)
                    return NotFound();
            }
            catch(Exception ex)
            {
                throw ex;
            }
            return Ok(user);
        }
        [HttpPost]
        [Route("adminlogin")]

        public IHttpActionResult VerifyAdminLogin(Login login)
        {
            Admin admin = null;
            try
            {
                admin = _adminAccRepo.VerifyAdminLogin(login.Email, login.Password);
                if (admin == null)
                    return NotFound();
            }
            catch (Exception e)
            {
                throw e;
            }
            return Ok(admin);


        }
        [HttpPost]
        [AllowAnonymous]
        [Route("sendMail")]
        public string PostSendGmail([FromBody] string user)
        {
            Random rnd = new Random();
            int otp = rnd.Next(1000, 9999);

            SmtpClient client = new SmtpClient();
            client.DeliveryMethod = SmtpDeliveryMethod.Network;
            client.EnableSsl = true;
            client.Host = "smtp.gmail.com";
            client.Port = 587;
            // setup Smtp authentication
            System.Net.NetworkCredential credentials =
                new System.Net.NetworkCredential("gladiatorflight.noreply@gmail.com", "flight@123");
            client.UseDefaultCredentials = false;
            client.Credentials = credentials;
            //can be obtained from your model
            MailMessage msg = new MailMessage();
            msg.From = new MailAddress("gladiatorflight.noreply@gmail.com");
            msg.To.Add(new MailAddress(user));
            msg.Subject = "OTP to reset your password";
            msg.IsBodyHtml = true;
            msg.Body = string.Format("<html><head></head><body><b>Dear user, Your OTP to reset password is:</b></body>"+otp);
            try
            {
                client.Send(msg);
                return otp.ToString();
            }
            catch (Exception ex)
            {
                return "error:" + ex.ToString();
            }
        }
        [HttpPost]
        [AllowAnonymous]
        [Route("sendmsg")]
        public string postsendmsg([FromBody] string user)
        {
            Random rnd = new Random();
            int otp = rnd.Next(1000, 9999);
            string number = user;
            string msg = "your otp is : " + otp.ToString();
            string result;
            string msg1 = System.Web.HttpUtility.UrlEncode(msg);
            //write query
            using (var wb = new WebClient())
            {
                byte[] response = wb.UploadValues("https://api.textlocal.in/send/", new NameValueCollection()
                {
                    {"apikey" , "9tRG/GpG4rc-tvycnCVLTA11GMaP8BHMIGgiIwANMZ" },
                    {"numbers", number},
                    {"message", msg1 },
                    {"sender", "txtlcl" }

                });
                result = System.Text.Encoding.UTF8.GetString(response);
            }
            try
            {

                return otp.ToString();
            }
            catch (Exception ex)
            {
                return "error:" + ex.ToString();
            }
        }

    }
}
