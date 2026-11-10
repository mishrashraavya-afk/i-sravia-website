/* Google Analytics 4.
   1. Create a GA4 property at https://analytics.google.com
   2. Copy the Measurement ID (looks like G-ABC123XYZ4) and paste it below.
   Until then nothing is loaded and no data is collected. */
(function () {
    var GA_MEASUREMENT_ID = "G-L1KLF4NYVN";

    if (!/^G-[A-Z0-9]{6,}$/.test(GA_MEASUREMENT_ID)) return;
    // Respect browsers sending Do Not Track
    if (navigator.doNotTrack === "1") return;

    window.dataLayer = window.dataLayer || [];
    window.gtag = function () { window.dataLayer.push(arguments); };
    gtag("js", new Date());
    gtag("config", GA_MEASUREMENT_ID, { anonymize_ip: true });

    var s = document.createElement("script");
    s.async = true;
    s.src = "https://www.googletagmanager.com/gtag/js?id=" + GA_MEASUREMENT_ID;
    document.head.appendChild(s);
})();
