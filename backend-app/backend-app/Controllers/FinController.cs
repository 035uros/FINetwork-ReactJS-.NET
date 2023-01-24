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
using System.Drawing;
using System.Drawing.Drawing2D;
using System.Drawing.Imaging;

namespace backend_app.Controllers
{
    [RoutePrefix("api/Fin")]
    public class FinController : ApiController
    {
        SqlConnection conn = new SqlConnection(ConfigurationManager.ConnectionStrings["conn"].ConnectionString);
        SqlCommand cmd = null;
        SqlDataAdapter da = null;

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
            catch (Exception ex)
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
                if (dt.Rows.Count > 0)
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
                

                conn.Open();

                cmd = new SqlCommand($"SELECT * FROM [finetwork].[dbo].[korisnik] WHERE korisnicko_ime = '" + korisnik.KorisnickoIme + "'", conn);
                SqlDataReader reader = cmd.ExecuteReader();
                while (reader.Read())
                {
                    // get the results of each column
                    msg = reader["korisnik_id"] + " " + reader["korisnicko_ime"] + " " + reader["id_tipa"] + " " +reader["ime"] + " " + reader["prezime"] + " " + reader["email"] + " " + reader["lozinka"] + " " + reader["id_smera"] + " " + reader["godina"] + " " + reader["stepen"] + " " + reader["pol"]
                        + " " + reader["slika"] + " " + reader["pusac"] + " " + reader["muzika"] + " " + reader["pauze"] + " " + reader["obezbedjeno_mesto"] + " " + reader["online"] + " " + reader["vise_ljudi"] + " " + reader["verifikovan"] + " " + reader["id_univerziteta"] as string;
                }
                conn.Close();

            }
            catch (Exception ex)
            {
                msg = ex.Message;
            }
            

            return msg;
        }

        [HttpPost]
        [Route("ProfileSetUp2")]
        public string ProfileSetUp2(Korisnik korisnik)
        {
            string msg = string.Empty;
            try
            {
                
                cmd = new SqlCommand($"UPDATE korisnik SET ime = N'" +korisnik.Ime+ "', prezime = N'" + korisnik.Prezime + "', email = '" + korisnik.Email + "', lozinka = N'" + korisnik.Lozinka + "', id_smera = " + korisnik.IdSmera + ", godina = N'" + korisnik.Godina + "', stepen = N'" + korisnik.Stepen + "', pol = N'" + korisnik.Pol + "', slika = '" + korisnik.Slika + "', pusac = N'" + korisnik.Pusac + "', muzika = N'" + korisnik.Muzika + "', pauze = N'" + korisnik.Pauze + "', obezbedjeno_mesto = N'" + korisnik.ObezbedjenoMesto + "', online = N'" + korisnik.Online + "', vise_ljudi = N'" + korisnik.ViseLjudi + "', id_univerziteta = "+ korisnik.IdUniverziteta + " WHERE korisnicko_ime = N'" + korisnik.KorisnickoIme + "';", conn);
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

        [HttpPost]
        [Route("Univerzitet")]
        public string Univerzitet()
        {
            string msg = string.Empty;
            try
            {

                conn.Open();

                cmd = new SqlCommand($"SELECT * FROM [univerzitet]", conn);
                SqlDataReader reader = cmd.ExecuteReader();
                while (reader.Read())
                {
                    msg = msg + reader["naziv"] + "-" + reader["id_univerziteta"] + ";";
                }
                conn.Close();
            }
            catch (Exception ex)
            {
                msg = ex.Message;
            }

            if (msg.Length > 0) { msg = msg.Remove(msg.Length - 1); }
            return msg;
        }

        [HttpPost]
        [Route("Unismer")]
        public string Unismer(Korisnik korisnik)
        {
            string msg = string.Empty;
            try
            {

                conn.Open();

                cmd = new SqlCommand($"select id_smera, id_univerziteta, id_tipa from korisnik WHERE korisnicko_ime = '" + korisnik.KorisnickoIme + "'", conn);
                SqlDataReader reader = cmd.ExecuteReader();
                while (reader.Read())
                {
                    msg = msg + reader["id_smera"] + "-" + reader["id_univerziteta"] + "-" + reader["id_tipa"] + ";";
                }
                conn.Close();
                if (msg.Length > 0) { msg = msg.Remove(msg.Length - 1); }
            }
            catch (Exception ex)
            {
                msg = ex.Message;
            }

            
            return msg;
        }

        [HttpPost]
        [Route("Smer")]
        public string Smer(Korisnik korisnik)
        {
            string msg = string.Empty;
            try
            {

                conn.Open();
                    
                if(korisnik.IdUniverziteta != 0)
                {
                    cmd = new SqlCommand($"SELECT * FROM [smer] WHERE id_univerziteta = " + korisnik.IdUniverziteta, conn);
                }
                else
                {
                    cmd = new SqlCommand($"SELECT * FROM [smer]" , conn);
                }
                
                SqlDataReader reader = cmd.ExecuteReader();
                while (reader.Read())
                {
                    msg = msg + reader["id_smera"] + "-" + reader["naziv"] + ";";
                }
                conn.Close();
            }
            catch (Exception ex)
            {
                msg = ex.Message;
            }

            if (msg.Length > 0) { msg = msg.Remove(msg.Length - 1); }
            return msg;
        }

        [HttpPost]
        [Route("Predmet")]
        public string Predmet(Korisnik korisnik)
        {
            string msg = string.Empty;
            try
            {

                conn.Open();

                cmd = new SqlCommand($"SELECT predmet.id_predmeta, naziv FROM predmet join predmeti_smera on predmeti_smera.id_predmeta=predmet.id_predmeta WHERE id_smera = " + korisnik.IdSmera, conn);
                SqlDataReader reader = cmd.ExecuteReader();
                while (reader.Read())
                {
                    msg = msg + reader["id_predmeta"] + "_" + reader["naziv"] + ";";
                }
                conn.Close();
                msg = msg.Remove(msg.Length - 1);
            }
            catch (Exception ex)
            {
                msg = ex.Message;
            }

            
            return msg;
        }

        [HttpPost]
        [Route("Oglas")]
        public string Oglas(Korisnik korisnik)
        {
            string msg = string.Empty;
            try
            {

                conn.Open();

                cmd = new SqlCommand($"  INSERT INTO oglas (user_name, id_predmeta, rok, info) VALUES (N'" + korisnik.KorisnickoIme + "', " + korisnik.IdPredmeta + ", '" + korisnik.Rok+"', N'" + korisnik.Info + "');", conn);
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

        [HttpPost]
        [Route("OglasLoad")]
        public string OglasLoad()
        {
            string msg = string.Empty;
            try
            {

                conn.Open();
                cmd = new SqlCommand($"SELECT TOP 8 * FROM oglas JOIN predmet ON oglas.id_predmeta = predmet.id_predmeta ORDER BY RAND();", conn);
                SqlDataReader reader = cmd.ExecuteReader();
                while (reader.Read())
                {
                    msg = msg + reader["naziv"] + "_" + reader["info"] + "_" + reader["id_oglasa"] + ";";
                }
                conn.Close();
            }
            catch (Exception ex)
            {
                msg = ex.Message;
            }

            if (msg.Length > 0) { msg = msg.Remove(msg.Length - 1); }
            return msg;
        }

        [HttpPost]
        [Route("ArticleLoad")]
        public string ArticleLoad(Korisnik korisnik)
        {
            string msg = string.Empty;
            try
            {

                conn.Open();
                cmd = new SqlCommand($"SELECT user_name, predmet.naziv AS 'nazivPredmeta', korisnik.ime AS 'ime', korisnik.prezime  AS 'prezime', univerzitet.naziv  AS 'nazivUniverziteta', stepen, smer.naziv AS 'nazivSmera', godina, pol, email, pusac, muzika, obezbedjeno_mesto, online, pauze, vise_ljudi, info FROM (((oglas JOIN predmet ON oglas.id_predmeta = predmet.id_predmeta) JOIN korisnik ON korisnik.korisnicko_ime = oglas.user_name) JOIN univerzitet ON univerzitet.id_univerziteta = korisnik.id_univerziteta) JOIN smer ON smer.id_univerziteta = univerzitet.id_univerziteta WHERE oglas.id_oglasa = " + korisnik.IdOglasa + ";", conn);
                SqlDataReader reader = cmd.ExecuteReader();
                while (reader.Read())
                {
                    msg = reader["nazivPredmeta"] + "_" + reader["ime"] + "_" + reader["prezime"] + "_" + reader["nazivUniverziteta"] + "_" + reader["nazivSmera"] + "_" + reader["godina"] + "_" + reader["pol"] + "_" + reader["email"] + "_" + reader["pusac"] + "_" + reader["muzika"] + "_" + reader["obezbedjeno_mesto"] + "_" + reader["pauze"] + "_" + reader["vise_ljudi"] + "_" + reader["info"] + "_" + reader["stepen"] + "_" + reader["online"] + "_" + reader["user_name"] + ";";
                }
                conn.Close();
            }
            catch (Exception ex)
            {
                msg = ex.Message;
            }

            if (msg.Length > 0) { msg = msg.Remove(msg.Length - 1); }
            return msg;
        }

        [HttpPost]
        [Route("OglasSearch")]
        public string OglasSearch(Korisnik korisnik)
        {
            string msg = string.Empty;
            try
            {

                conn.Open();
                cmd = new SqlCommand($"SELECT * FROM oglas JOIN predmet ON oglas.id_predmeta = predmet.id_predmeta WHERE predmet.naziv= N'" + korisnik.NazivPredmeta + "';", conn);
                SqlDataReader reader = cmd.ExecuteReader();
                while (reader.Read())
                {
                    msg = msg + reader["naziv"] + "_" + reader["info"] + "_" + reader["id_oglasa"] + ";";
                }
                conn.Close();
            }
            catch (Exception ex)
            {
                msg = ex.Message;
            }

           
            if (msg.Length > 0) { msg = msg.Remove(msg.Length - 1); }
            return msg;
        }

        [HttpPost]
        [Route("CreateConvo")]
        public string CreateConvo(Korisnik korisnik)
        {
            string msg = string.Empty;
            try
            {

                conn.Open();
                cmd = new SqlCommand($"SELECT count(*) as 'broj' FROM konverzacija WHERE (konverzacija.user_posiljaoca=N'" + korisnik.KorisnickoIme + "' AND konverzacija.user_primaoca = N'" + korisnik.UserPrimaoca + "') OR (konverzacija.user_posiljaoca=N'" + korisnik.UserPrimaoca + "' AND konverzacija.user_primaoca = N'" + korisnik.KorisnickoIme + "');", conn);
                SqlDataReader reader = cmd.ExecuteReader();
                while (reader.Read())
                {
                    msg = msg + reader["broj"] ;
                }
                reader.Close();
                if(msg == "0")
                {
                    cmd = new SqlCommand($"INSERT INTO konverzacija (user_posiljaoca, user_primaoca, id_oglasa) VALUES (N'" + korisnik.KorisnickoIme + "', N'" + korisnik.UserPrimaoca + "', '" + korisnik.IdOglasa + "');", conn);
                    int i = cmd.ExecuteNonQuery();
                    if (i > 0)
                    {
                        cmd = new SqlCommand($"INSERT INTO poruka (user_korisnika, id_konverzacije, poruka, date) SELECT N'" + korisnik.KorisnickoIme + "', id_konverzacije, N'" + korisnik.Info + "', GETDATE() from konverzacija WHERE (konverzacija.user_posiljaoca=N'" + korisnik.KorisnickoIme + "' AND konverzacija.user_primaoca = N'" + korisnik.UserPrimaoca + "') OR (konverzacija.user_posiljaoca=N'" + korisnik.UserPrimaoca + "' AND konverzacija.user_primaoca = N'" + korisnik.KorisnickoIme + "');", conn);
                        int b = cmd.ExecuteNonQuery();
                        if (b > 0)
                        {
                            msg = "Унос успешан";
                        }
                        else
                        {
                            return msg = "Унос неуспешан";
                        }
                    }
                    else
                    {
                        return msg = "Унос неуспешан";
                    }
                }
                else
                {
                    cmd = new SqlCommand($"INSERT INTO poruka (user_korisnika, id_konverzacije, poruka, date) SELECT N'" + korisnik.KorisnickoIme + "', id_konverzacije, N'" + korisnik.Info + "', GETDATE() from konverzacija WHERE (konverzacija.user_posiljaoca=N'" + korisnik.KorisnickoIme + "' AND konverzacija.user_primaoca = N'" + korisnik.UserPrimaoca + "') OR (konverzacija.user_posiljaoca=N'" + korisnik.UserPrimaoca + "' AND konverzacija.user_primaoca = N'" + korisnik.KorisnickoIme + "');", conn);
                    int b = cmd.ExecuteNonQuery();
                    if (b > 0)
                    {
                        msg = "Унос успешан";
                    }
                    else
                    {
                        return msg = "Унос неуспешан";
                    }
                }

                conn.Close();
            }
            catch (Exception ex)
            {
                msg = ex.Message;
            }
            
            return msg;
        }
        [HttpPost]
        [Route("Korisnici")]
        public string Korisnici()
        {
            string msg = string.Empty;
            try
            {

                conn.Open();

                cmd = new SqlCommand($"select ime, prezime, email, korisnik_id from korisnik WHERE verifikovan = 0", conn);
                SqlDataReader reader = cmd.ExecuteReader();
                while (reader.Read())
                {
                    msg = msg + reader["ime"] + "-" + reader["prezime"] + "-" + reader["email"] + "-" + reader["korisnik_id"] + ";";
                }
                conn.Close();
                msg = msg.Remove(msg.Length - 1);
            }
            catch (Exception ex)
            {
                msg = ex.Message;
            }

            return msg;
        }

        [HttpPost]
        [Route("Odobri")]
        public string Odobri(Korisnik korisnik)
        {
            string msg = string.Empty;
            try
            {

                conn.Open();

                cmd = new SqlCommand($"UPDATE korisnik SET verifikovan = 1 WHERE korisnik_id = " + korisnik.IdKorisnika, conn);
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

        [HttpPost]
        [Route("Obrisi")]
        public string Obrisi(Korisnik korisnik)
        {
            string msg = string.Empty;
            try
            {

                conn.Open();

                cmd = new SqlCommand($"DELETE FROM korisnik WHERE korisnik_id = " + korisnik.IdKorisnika, conn);
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
        [HttpPost]
        [Route("PopulateChatFriends")]
        public string PopulateChatFriends(Korisnik korisnik)
        {
            string msg = string.Empty;
            string msg2 = string.Empty;
            try
            {

                conn.Open();
                int i = 0;
                cmd = new SqlCommand($"SELECT korisnik.ime as [ime], korisnik.korisnicko_ime FROM korisnik join konverzacija on korisnicko_ime=user_primaoca WHERE user_posiljaoca=N'" + korisnik.KorisnickoIme + "' union SELECT korisnik.ime as [ime], korisnik.korisnicko_ime  FROM korisnik join konverzacija on korisnicko_ime=user_posiljaoca WHERE user_primaoca=N'" + korisnik.KorisnickoIme +"'", conn);
                SqlDataReader reader = cmd.ExecuteReader();
                while (reader.Read())
                {
                    msg = msg + reader["ime"] + "_" + reader["korisnicko_ime"] + ";" ;
                    i++;

                }
                reader.Close();
                reader.Dispose();
                conn.Close();
                conn.Open();
                string[] word = msg.Split(';');

                int j = 0;
                for (int k=0; k<i; k++)
                {

                    string[] unames = word[k].Split('_');
                    cmd = new SqlCommand($"select slika from korisnik where korisnicko_ime=N'" + unames[1] + "'", conn);
                    reader = cmd.ExecuteReader();
                    while (reader.Read())
                    {
                        msg2 = msg2 + word[k] + "_" + reader["slika"] + " ";
                    }
                    reader.Close();
                }
                conn.Close();
                if (msg2.Length > 0) { msg2 = msg2.Remove(msg2.Length - 1);  }
                
            }
            catch (Exception ex)
            {
                msg2 = ex.Message;
            }

            return msg2;
        }

        [HttpPost]
        [Route("PopulateChatMsgs")]
        public string PopulateChatMsgs(Korisnik korisnik)
        {
            string msg = string.Empty;
            string msg2 = string.Empty;
            try
            {

                conn.Open();
                int i = 0;
                cmd = new SqlCommand($"SELECT user_korisnika, poruka from poruka join konverzacija ON poruka.id_konverzacije=konverzacija.id_konverzacije WHERE (konverzacija.user_posiljaoca=N'"+ korisnik.KorisnickoIme + "' AND konverzacija.user_primaoca=N'" + korisnik.UserPrimaoca + "') OR (konverzacija.user_posiljaoca=N'" + korisnik.UserPrimaoca + "' AND konverzacija.user_primaoca=N'" + korisnik.KorisnickoIme + "') ORDER BY date asc", conn);
                SqlDataReader reader = cmd.ExecuteReader();
                while (reader.Read())
                {
                    msg = msg + reader["poruka"] + "_" + reader["user_korisnika"] + ";";
                    i++;

                }
                reader.Close();
                reader.Dispose();
                conn.Close();
                conn.Open();
                string[] word = msg.Split(';');

                int j = 0;
                for (int k = 0; k < i; k++)
                {

                    string[] unames = word[k].Split('_');
                    cmd = new SqlCommand($"select slika from korisnik where korisnicko_ime=N'" + unames[1] + "'", conn);
                    reader = cmd.ExecuteReader();
                    while (reader.Read())
                    {
                        msg2 = msg2 + word[k] + "_" + reader["slika"] + "|";
                    }
                    reader.Close();
                }
                conn.Close();
                if (msg2.Length > 0) { msg2 = msg2.Remove(msg2.Length - 1); }

            }
            catch (Exception ex)
            {
                msg2 = ex.Message;
            }

            return msg2;
        }
    }
}
