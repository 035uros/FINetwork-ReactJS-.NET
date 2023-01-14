using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Data;
using System.Data.SqlClient;
using System.Configuration;
using backend_app.Models;

namespace backend_app.Controllers
{
    [RoutePrefix("api/Fin")]
    public class FinController : ApiController
    {
        SqlConnection conn = new SqlConnection(ConfigurationManager.ConnectionStrings["conn"].ConnectionString);
        SqlCommand cmd = null;
        SqlDataAdapter da =null;

        [HttpPost]
        [Route("Registration")]
        public string Registration(Korisnik korisnik)
        {
            string msg = string.Empty;
            try
            {
                cmd = new SqlCommand("app_Reg", conn);
                cmd.CommandType = CommandType.StoredProcedure;
                cmd.Parameters.AddWithValue("@ime", korisnik.Ime);
                cmd.Parameters.AddWithValue("@prezime", korisnik.Prezime);
                cmd.Parameters.AddWithValue("@email", korisnik.Email);
                cmd.Parameters.AddWithValue("@lozinka", korisnik.Lozinka);
                cmd.Parameters.AddWithValue("@korisnicko_ime", korisnik.KorisnickoIme);

                conn.Open();
                int i = cmd.ExecuteNonQuery();
                conn.Close();
                if (i > 0)
                {
                    msg = "Унос успешан";
                }
                else
                {
                    msg = "Унос неуспешан";
                }

            }
            catch(Exception ex)
            {
                msg = ex.Message;
            }

            return msg;
        }

        [HttpPost]
        [Route("Login")]
        public string Login(Korisnik korisnik)
        {
            string msg = string.Empty;
            try
            {
                da = new SqlDataAdapter("app_Login", conn);
                da.SelectCommand.CommandType = CommandType.StoredProcedure;
                da.SelectCommand.Parameters.AddWithValue("@korisnicko_ime", korisnik.KorisnickoIme);
                da.SelectCommand.Parameters.AddWithValue("@lozinka", korisnik.Lozinka);
                DataTable dt = new DataTable();
                da.Fill(dt);
                if(dt.Rows.Count>0)
                {
                    msg = "Пријава успешна";
                }
                else
                {
                    msg = "Пријава неуспешна";
                }

            }
            catch (Exception ex)
            {
                msg = ex.Message;
            }

            return msg;
        }


        [HttpPost]
        [Route("ProfileSetUp")]
        public string ProfileSetUp(Korisnik korisnik)
        {
            string msg = string.Empty;
            try
            {
                cmd = new SqlCommand("app_Prof", conn);
                cmd.CommandType = CommandType.StoredProcedure;
                cmd.Parameters.AddWithValue("@ime", korisnik.Ime);
                cmd.Parameters.AddWithValue("@prezime", korisnik.Prezime);
                cmd.Parameters.AddWithValue("@email", korisnik.Email);
                cmd.Parameters.AddWithValue("@lozinka", korisnik.Lozinka);
                cmd.Parameters.AddWithValue("@korisnicko_ime", korisnik.KorisnickoIme);

                conn.Open();
                int i = cmd.ExecuteNonQuery();
                conn.Close();
                if (i > 0)
                {
                    msg = "Унос успешан";
                }
                else
                {
                    msg = "Унос неуспешан";
                }

            }
            catch (Exception ex)
            {
                msg = ex.Message;
            }

            return msg;
        }
    }
}
