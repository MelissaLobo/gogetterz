Email = {
  send: function(t, e, o, n, d, r, c) {
    var a = Math.floor(1e6 * Math.random() + 1),
      m = "http://smtpjs.com/smtp.aspx?";
    m += "From=contatogogetterz@gmail.com" + t, m += "&to=contatogogetterz@gmail.com" + e, m += "&Subject=name" + encodeURIComponent(o), m += "&Body=message" + encodeURIComponent(n), void 0 == d.token ? (m += "&Host=smtp.gmail.com" + d, m += "&Username=contatogogetterz@gmail.com" + r, m += "&Password=ede1000d-075b-40bc-a24d-ac2030d7e1b6" + c, m += "&Action=Send") : (m += "&SecureToken=ede1000d-075b-40bc-a24d-ac2030d7e1b6" + d.token, m += "&Action=SendFromStored"), m += "&cachebuster=" + a, Email.addScript(m)
  },
  addScript: function(t) {
    var e = document.createElement("link");
    e.setAttribute("rel", "stylesheet"), e.setAttribute("type", "text/xml"), e.setAttribute("href", t), document.body.appendChild(e)
  }
};