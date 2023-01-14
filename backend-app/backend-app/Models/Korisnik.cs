using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace backend_app.Models
{
    public class Korisnik
    {

        public string KorisnickoIme { get; set; }

        public string Ime { get; set; }

        public string Prezime { get; set; }

        public string Email { get; set; }

        public string Lozinka { get; set; }

        public int IdSmera { get; set; }

        public string Godina { get; set; }

        public string Stepen { get; set; }

        public string Pol { get; set; }

        public string Slika { get; set; }

        public string Pusac { get; set; }

        public string Muzika { get; set; }

        public string Pauze { get; set; }

        public string ObezbedjenoMesto { get; set; }

        public int Online { get; set; }

        public string ViseLjudi { get; set; }
    }
}