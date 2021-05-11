var scopackager = require('simple-scorm-packager');
var path = require('path');

  const config = {
    version: '1.2',
    organization: 'Nutresa',
    title: 'Acoso laboral',
    language: 'en-ES',
    masteryScore: 100,
    startingPage: 'index.html',
    source: path.join(__dirname, 'build'),
    package: {
      version: process.env.npm_package_version,
      zip: false,
      author: 'IUSH',
      outputFolder: path.join(__dirname, 'scorm_packages'),
      description: 'Acoso laboral',
      keywords: ['scorm', 'test', 'course'],
      typicalDuration: 'PT0H5M0S',
      rights: `©${new Date().getFullYear()} Nutresa.`,
      vcard: {
        author: 'Pascal-93',
        org: 'IUSH',
        tel: '4 600 700 ext 2215',
        address: 'CR 70 # 52-49 (Campus Estadio)',
        mail: 'soporte.virtual@salazaryherrera.edu.co',
        url: 'https://www.iush.edu.co/'
      }
    }
  };

  scopackager(config, function(msg){
    console.log(msg);
    process.exit(0);
  });
