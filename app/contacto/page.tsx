'use client'

import { useState } from 'react'
import Link from 'next/link'
import PageLayout from '@/components/PageLayout'
import { useLang } from '@/lib/LangContext'
import { t, whatsappUrl } from '@/lib/i18n'
import { WhatsAppIcon } from '@/components/icons'

const COUNTRY_CODES: { code: string; es: string; en: string }[] = [
  { code: '+57',  es: 'Colombia (+57)',                    en: 'Colombia (+57)' },
  { code: '+93',  es: 'Afganistán (+93)',                  en: 'Afghanistan (+93)' },
  { code: '+355', es: 'Albania (+355)',                    en: 'Albania (+355)' },
  { code: '+49',  es: 'Alemania (+49)',                    en: 'Germany (+49)' },
  { code: '+376', es: 'Andorra (+376)',                    en: 'Andorra (+376)' },
  { code: '+244', es: 'Angola (+244)',                     en: 'Angola (+244)' },
  { code: '+1',   es: 'Anguila (+1-264)',                  en: 'Anguilla (+1-264)' },
  { code: '+1',   es: 'Antigua y Barbuda (+1-268)',        en: 'Antigua and Barbuda (+1-268)' },
  { code: '+966', es: 'Arabia Saudita (+966)',             en: 'Saudi Arabia (+966)' },
  { code: '+213', es: 'Argelia (+213)',                    en: 'Algeria (+213)' },
  { code: '+54',  es: 'Argentina (+54)',                   en: 'Argentina (+54)' },
  { code: '+374', es: 'Armenia (+374)',                    en: 'Armenia (+374)' },
  { code: '+297', es: 'Aruba (+297)',                      en: 'Aruba (+297)' },
  { code: '+61',  es: 'Australia (+61)',                   en: 'Australia (+61)' },
  { code: '+43',  es: 'Austria (+43)',                     en: 'Austria (+43)' },
  { code: '+994', es: 'Azerbaiyán (+994)',                 en: 'Azerbaijan (+994)' },
  { code: '+1',   es: 'Bahamas (+1-242)',                  en: 'Bahamas (+1-242)' },
  { code: '+973', es: 'Baréin (+973)',                     en: 'Bahrain (+973)' },
  { code: '+880', es: 'Bangladés (+880)',                  en: 'Bangladesh (+880)' },
  { code: '+1',   es: 'Barbados (+1-246)',                 en: 'Barbados (+1-246)' },
  { code: '+32',  es: 'Bélgica (+32)',                     en: 'Belgium (+32)' },
  { code: '+501', es: 'Belice (+501)',                     en: 'Belize (+501)' },
  { code: '+229', es: 'Benín (+229)',                      en: 'Benin (+229)' },
  { code: '+375', es: 'Bielorrusia (+375)',                en: 'Belarus (+375)' },
  { code: '+591', es: 'Bolivia (+591)',                    en: 'Bolivia (+591)' },
  { code: '+387', es: 'Bosnia y Herzegovina (+387)',       en: 'Bosnia and Herzegovina (+387)' },
  { code: '+267', es: 'Botsuana (+267)',                   en: 'Botswana (+267)' },
  { code: '+55',  es: 'Brasil (+55)',                      en: 'Brazil (+55)' },
  { code: '+673', es: 'Brunéi (+673)',                     en: 'Brunei (+673)' },
  { code: '+359', es: 'Bulgaria (+359)',                   en: 'Bulgaria (+359)' },
  { code: '+226', es: 'Burkina Faso (+226)',               en: 'Burkina Faso (+226)' },
  { code: '+257', es: 'Burundi (+257)',                    en: 'Burundi (+257)' },
  { code: '+975', es: 'Bután (+975)',                      en: 'Bhutan (+975)' },
  { code: '+238', es: 'Cabo Verde (+238)',                 en: 'Cape Verde (+238)' },
  { code: '+855', es: 'Camboya (+855)',                    en: 'Cambodia (+855)' },
  { code: '+237', es: 'Camerún (+237)',                    en: 'Cameroon (+237)' },
  { code: '+1',   es: 'Canadá (+1)',                       en: 'Canada (+1)' },
  { code: '+974', es: 'Catar (+974)',                      en: 'Qatar (+974)' },
  { code: '+236', es: 'República Centroafricana (+236)',   en: 'Central African Republic (+236)' },
  { code: '+235', es: 'Chad (+235)',                       en: 'Chad (+235)' },
  { code: '+56',  es: 'Chile (+56)',                       en: 'Chile (+56)' },
  { code: '+86',  es: 'China (+86)',                       en: 'China (+86)' },
  { code: '+357', es: 'Chipre (+357)',                     en: 'Cyprus (+357)' },
  { code: '+850', es: 'Corea del Norte (+850)',            en: 'North Korea (+850)' },
  { code: '+82',  es: 'Corea del Sur (+82)',               en: 'South Korea (+82)' },
  { code: '+225', es: 'Costa de Marfil (+225)',            en: 'Ivory Coast (+225)' },
  { code: '+506', es: 'Costa Rica (+506)',                 en: 'Costa Rica (+506)' },
  { code: '+385', es: 'Croacia (+385)',                    en: 'Croatia (+385)' },
  { code: '+53',  es: 'Cuba (+53)',                        en: 'Cuba (+53)' },
  { code: '+420', es: 'República Checa (+420)',            en: 'Czech Republic (+420)' },
  { code: '+45',  es: 'Dinamarca (+45)',                   en: 'Denmark (+45)' },
  { code: '+1',   es: 'Dominica (+1-767)',                 en: 'Dominica (+1-767)' },
  { code: '+593', es: 'Ecuador (+593)',                    en: 'Ecuador (+593)' },
  { code: '+20',  es: 'Egipto (+20)',                      en: 'Egypt (+20)' },
  { code: '+503', es: 'El Salvador (+503)',                en: 'El Salvador (+503)' },
  { code: '+971', es: 'Emiratos Árabes Unidos (+971)',     en: 'United Arab Emirates (+971)' },
  { code: '+291', es: 'Eritrea (+291)',                    en: 'Eritrea (+291)' },
  { code: '+421', es: 'Eslovaquia (+421)',                 en: 'Slovakia (+421)' },
  { code: '+386', es: 'Eslovenia (+386)',                  en: 'Slovenia (+386)' },
  { code: '+34',  es: 'España (+34)',                      en: 'Spain (+34)' },
  { code: '+1',   es: 'Estados Unidos (+1)',               en: 'United States (+1)' },
  { code: '+372', es: 'Estonia (+372)',                    en: 'Estonia (+372)' },
  { code: '+251', es: 'Etiopía (+251)',                    en: 'Ethiopia (+251)' },
  { code: '+679', es: 'Fiyi (+679)',                       en: 'Fiji (+679)' },
  { code: '+63',  es: 'Filipinas (+63)',                   en: 'Philippines (+63)' },
  { code: '+358', es: 'Finlandia (+358)',                  en: 'Finland (+358)' },
  { code: '+33',  es: 'Francia (+33)',                     en: 'France (+33)' },
  { code: '+241', es: 'Gabón (+241)',                      en: 'Gabon (+241)' },
  { code: '+220', es: 'Gambia (+220)',                     en: 'Gambia (+220)' },
  { code: '+995', es: 'Georgia (+995)',                    en: 'Georgia (+995)' },
  { code: '+233', es: 'Ghana (+233)',                      en: 'Ghana (+233)' },
  { code: '+350', es: 'Gibraltar (+350)',                  en: 'Gibraltar (+350)' },
  { code: '+1',   es: 'Granada (+1-473)',                  en: 'Grenada (+1-473)' },
  { code: '+30',  es: 'Grecia (+30)',                      en: 'Greece (+30)' },
  { code: '+299', es: 'Groenlandia (+299)',                en: 'Greenland (+299)' },
  { code: '+1',   es: 'Guam (+1-671)',                     en: 'Guam (+1-671)' },
  { code: '+502', es: 'Guatemala (+502)',                  en: 'Guatemala (+502)' },
  { code: '+245', es: 'Guinea-Bisáu (+245)',               en: 'Guinea-Bissau (+245)' },
  { code: '+240', es: 'Guinea Ecuatorial (+240)',          en: 'Equatorial Guinea (+240)' },
  { code: '+224', es: 'Guinea (+224)',                     en: 'Guinea (+224)' },
  { code: '+592', es: 'Guyana (+592)',                     en: 'Guyana (+592)' },
  { code: '+509', es: 'Haití (+509)',                      en: 'Haiti (+509)' },
  { code: '+504', es: 'Honduras (+504)',                   en: 'Honduras (+504)' },
  { code: '+852', es: 'Hong Kong (+852)',                  en: 'Hong Kong (+852)' },
  { code: '+36',  es: 'Hungría (+36)',                     en: 'Hungary (+36)' },
  { code: '+91',  es: 'India (+91)',                       en: 'India (+91)' },
  { code: '+62',  es: 'Indonesia (+62)',                   en: 'Indonesia (+62)' },
  { code: '+964', es: 'Irak (+964)',                       en: 'Iraq (+964)' },
  { code: '+98',  es: 'Irán (+98)',                        en: 'Iran (+98)' },
  { code: '+353', es: 'Irlanda (+353)',                    en: 'Ireland (+353)' },
  { code: '+354', es: 'Islandia (+354)',                   en: 'Iceland (+354)' },
  { code: '+1',   es: 'Islas Caimán (+1-345)',             en: 'Cayman Islands (+1-345)' },
  { code: '+682', es: 'Islas Cook (+682)',                 en: 'Cook Islands (+682)' },
  { code: '+298', es: 'Islas Feroe (+298)',                en: 'Faroe Islands (+298)' },
  { code: '+500', es: 'Islas Malvinas (+500)',             en: 'Falkland Islands (+500)' },
  { code: '+692', es: 'Islas Marshall (+692)',             en: 'Marshall Islands (+692)' },
  { code: '+1',   es: 'Islas Vírgenes EE.UU. (+1-340)',   en: 'U.S. Virgin Islands (+1-340)' },
  { code: '+1',   es: 'Islas Vírgenes Británicas (+1-284)', en: 'British Virgin Islands (+1-284)' },
  { code: '+972', es: 'Israel (+972)',                     en: 'Israel (+972)' },
  { code: '+39',  es: 'Italia (+39)',                      en: 'Italy (+39)' },
  { code: '+1',   es: 'Jamaica (+1-876)',                  en: 'Jamaica (+1-876)' },
  { code: '+81',  es: 'Japón (+81)',                       en: 'Japan (+81)' },
  { code: '+962', es: 'Jordania (+962)',                   en: 'Jordan (+962)' },
  { code: '+7',   es: 'Kazajistán (+7)',                   en: 'Kazakhstan (+7)' },
  { code: '+254', es: 'Kenia (+254)',                      en: 'Kenya (+254)' },
  { code: '+996', es: 'Kirguistán (+996)',                 en: 'Kyrgyzstan (+996)' },
  { code: '+686', es: 'Kiribati (+686)',                   en: 'Kiribati (+686)' },
  { code: '+383', es: 'Kosovo (+383)',                     en: 'Kosovo (+383)' },
  { code: '+965', es: 'Kuwait (+965)',                     en: 'Kuwait (+965)' },
  { code: '+856', es: 'Laos (+856)',                       en: 'Laos (+856)' },
  { code: '+266', es: 'Lesoto (+266)',                     en: 'Lesotho (+266)' },
  { code: '+371', es: 'Letonia (+371)',                    en: 'Latvia (+371)' },
  { code: '+961', es: 'Líbano (+961)',                     en: 'Lebanon (+961)' },
  { code: '+231', es: 'Liberia (+231)',                    en: 'Liberia (+231)' },
  { code: '+218', es: 'Libia (+218)',                      en: 'Libya (+218)' },
  { code: '+423', es: 'Liechtenstein (+423)',              en: 'Liechtenstein (+423)' },
  { code: '+370', es: 'Lituania (+370)',                   en: 'Lithuania (+370)' },
  { code: '+352', es: 'Luxemburgo (+352)',                 en: 'Luxembourg (+352)' },
  { code: '+853', es: 'Macao (+853)',                      en: 'Macau (+853)' },
  { code: '+389', es: 'Macedonia del Norte (+389)',        en: 'North Macedonia (+389)' },
  { code: '+261', es: 'Madagascar (+261)',                 en: 'Madagascar (+261)' },
  { code: '+60',  es: 'Malasia (+60)',                     en: 'Malaysia (+60)' },
  { code: '+265', es: 'Malaui (+265)',                     en: 'Malawi (+265)' },
  { code: '+960', es: 'Maldivas (+960)',                   en: 'Maldives (+960)' },
  { code: '+223', es: 'Malí (+223)',                       en: 'Mali (+223)' },
  { code: '+356', es: 'Malta (+356)',                      en: 'Malta (+356)' },
  { code: '+212', es: 'Marruecos (+212)',                  en: 'Morocco (+212)' },
  { code: '+222', es: 'Mauritania (+222)',                 en: 'Mauritania (+222)' },
  { code: '+230', es: 'Mauricio (+230)',                   en: 'Mauritius (+230)' },
  { code: '+52',  es: 'México (+52)',                      en: 'Mexico (+52)' },
  { code: '+691', es: 'Micronesia (+691)',                 en: 'Micronesia (+691)' },
  { code: '+373', es: 'Moldavia (+373)',                   en: 'Moldova (+373)' },
  { code: '+377', es: 'Mónaco (+377)',                     en: 'Monaco (+377)' },
  { code: '+976', es: 'Mongolia (+976)',                   en: 'Mongolia (+976)' },
  { code: '+382', es: 'Montenegro (+382)',                 en: 'Montenegro (+382)' },
  { code: '+1',   es: 'Montserrat (+1-664)',               en: 'Montserrat (+1-664)' },
  { code: '+258', es: 'Mozambique (+258)',                 en: 'Mozambique (+258)' },
  { code: '+264', es: 'Namibia (+264)',                    en: 'Namibia (+264)' },
  { code: '+674', es: 'Nauru (+674)',                      en: 'Nauru (+674)' },
  { code: '+977', es: 'Nepal (+977)',                      en: 'Nepal (+977)' },
  { code: '+505', es: 'Nicaragua (+505)',                  en: 'Nicaragua (+505)' },
  { code: '+227', es: 'Níger (+227)',                      en: 'Niger (+227)' },
  { code: '+234', es: 'Nigeria (+234)',                    en: 'Nigeria (+234)' },
  { code: '+683', es: 'Niue (+683)',                       en: 'Niue (+683)' },
  { code: '+47',  es: 'Noruega (+47)',                     en: 'Norway (+47)' },
  { code: '+687', es: 'Nueva Caledonia (+687)',            en: 'New Caledonia (+687)' },
  { code: '+64',  es: 'Nueva Zelanda (+64)',               en: 'New Zealand (+64)' },
  { code: '+968', es: 'Omán (+968)',                       en: 'Oman (+968)' },
  { code: '+31',  es: 'Países Bajos (+31)',                en: 'Netherlands (+31)' },
  { code: '+92',  es: 'Pakistán (+92)',                    en: 'Pakistan (+92)' },
  { code: '+680', es: 'Palaos (+680)',                     en: 'Palau (+680)' },
  { code: '+970', es: 'Palestina (+970)',                  en: 'Palestine (+970)' },
  { code: '+507', es: 'Panamá (+507)',                     en: 'Panama (+507)' },
  { code: '+675', es: 'Papúa Nueva Guinea (+675)',         en: 'Papua New Guinea (+675)' },
  { code: '+595', es: 'Paraguay (+595)',                   en: 'Paraguay (+595)' },
  { code: '+51',  es: 'Perú (+51)',                        en: 'Peru (+51)' },
  { code: '+689', es: 'Polinesia Francesa (+689)',         en: 'French Polynesia (+689)' },
  { code: '+48',  es: 'Polonia (+48)',                     en: 'Poland (+48)' },
  { code: '+351', es: 'Portugal (+351)',                   en: 'Portugal (+351)' },
  { code: '+1',   es: 'Puerto Rico (+1-787)',              en: 'Puerto Rico (+1-787)' },
  { code: '+44',  es: 'Reino Unido (+44)',                 en: 'United Kingdom (+44)' },
  { code: '+242', es: 'República del Congo (+242)',        en: 'Republic of the Congo (+242)' },
  { code: '+243', es: 'República Dem. del Congo (+243)',   en: 'Dem. Republic of the Congo (+243)' },
  { code: '+1',   es: 'República Dominicana (+1-809)',     en: 'Dominican Republic (+1-809)' },
  { code: '+262', es: 'Reunión (+262)',                    en: 'Réunion (+262)' },
  { code: '+250', es: 'Ruanda (+250)',                     en: 'Rwanda (+250)' },
  { code: '+40',  es: 'Rumanía (+40)',                     en: 'Romania (+40)' },
  { code: '+7',   es: 'Rusia (+7)',                        en: 'Russia (+7)' },
  { code: '+685', es: 'Samoa (+685)',                      en: 'Samoa (+685)' },
  { code: '+378', es: 'San Marino (+378)',                 en: 'San Marino (+378)' },
  { code: '+1',   es: 'San Cristóbal y Nieves (+1-869)',   en: 'Saint Kitts and Nevis (+1-869)' },
  { code: '+1',   es: 'Santa Lucía (+1-758)',              en: 'Saint Lucia (+1-758)' },
  { code: '+239', es: 'Santo Tomé y Príncipe (+239)',      en: 'São Tomé and Príncipe (+239)' },
  { code: '+1',   es: 'San Vicente y las Granadinas (+1-784)', en: 'Saint Vincent and the Grenadines (+1-784)' },
  { code: '+221', es: 'Senegal (+221)',                    en: 'Senegal (+221)' },
  { code: '+381', es: 'Serbia (+381)',                     en: 'Serbia (+381)' },
  { code: '+248', es: 'Seychelles (+248)',                 en: 'Seychelles (+248)' },
  { code: '+232', es: 'Sierra Leona (+232)',               en: 'Sierra Leone (+232)' },
  { code: '+65',  es: 'Singapur (+65)',                    en: 'Singapore (+65)' },
  { code: '+963', es: 'Siria (+963)',                      en: 'Syria (+963)' },
  { code: '+252', es: 'Somalia (+252)',                    en: 'Somalia (+252)' },
  { code: '+94',  es: 'Sri Lanka (+94)',                   en: 'Sri Lanka (+94)' },
  { code: '+268', es: 'Suazilandia (+268)',                en: 'Eswatini (+268)' },
  { code: '+249', es: 'Sudán (+249)',                      en: 'Sudan (+249)' },
  { code: '+211', es: 'Sudán del Sur (+211)',              en: 'South Sudan (+211)' },
  { code: '+46',  es: 'Suecia (+46)',                      en: 'Sweden (+46)' },
  { code: '+41',  es: 'Suiza (+41)',                       en: 'Switzerland (+41)' },
  { code: '+597', es: 'Surinam (+597)',                    en: 'Suriname (+597)' },
  { code: '+992', es: 'Tayikistán (+992)',                 en: 'Tajikistan (+992)' },
  { code: '+66',  es: 'Tailandia (+66)',                   en: 'Thailand (+66)' },
  { code: '+886', es: 'Taiwán (+886)',                     en: 'Taiwan (+886)' },
  { code: '+255', es: 'Tanzania (+255)',                   en: 'Tanzania (+255)' },
  { code: '+670', es: 'Timor Oriental (+670)',             en: 'East Timor (+670)' },
  { code: '+228', es: 'Togo (+228)',                       en: 'Togo (+228)' },
  { code: '+676', es: 'Tonga (+676)',                      en: 'Tonga (+676)' },
  { code: '+1',   es: 'Trinidad y Tobago (+1-868)',        en: 'Trinidad and Tobago (+1-868)' },
  { code: '+216', es: 'Túnez (+216)',                      en: 'Tunisia (+216)' },
  { code: '+993', es: 'Turkmenistán (+993)',               en: 'Turkmenistan (+993)' },
  { code: '+90',  es: 'Turquía (+90)',                     en: 'Turkey (+90)' },
  { code: '+1',   es: 'Turcas y Caicos (+1-649)',          en: 'Turks and Caicos (+1-649)' },
  { code: '+688', es: 'Tuvalu (+688)',                     en: 'Tuvalu (+688)' },
  { code: '+380', es: 'Ucrania (+380)',                    en: 'Ukraine (+380)' },
  { code: '+256', es: 'Uganda (+256)',                     en: 'Uganda (+256)' },
  { code: '+598', es: 'Uruguay (+598)',                    en: 'Uruguay (+598)' },
  { code: '+998', es: 'Uzbekistán (+998)',                 en: 'Uzbekistan (+998)' },
  { code: '+678', es: 'Vanuatu (+678)',                    en: 'Vanuatu (+678)' },
  { code: '+58',  es: 'Venezuela (+58)',                   en: 'Venezuela (+58)' },
  { code: '+84',  es: 'Vietnam (+84)',                     en: 'Vietnam (+84)' },
  { code: '+681', es: 'Wallis y Futuna (+681)',            en: 'Wallis and Futuna (+681)' },
  { code: '+967', es: 'Yemen (+967)',                      en: 'Yemen (+967)' },
  { code: '+253', es: 'Yibuti (+253)',                     en: 'Djibouti (+253)' },
  { code: '+260', es: 'Zambia (+260)',                     en: 'Zambia (+260)' },
  { code: '+263', es: 'Zimbabue (+263)',                   en: 'Zimbabwe (+263)' },
]

function ContactoContent() {
  const { lang } = useLang()
  const tr = t(lang)
  const [selectedCountryEs, setSelectedCountryEs] = useState('Colombia (+57)')
  const [contactoError, setContactoError] = useState(false)
  const [colombia, ...rest] = COUNTRY_CODES
  const sortedCodes = [
    colombia,
    ...rest.sort((a, b) => (lang === 'en' ? a.en : a.es).localeCompare(lang === 'en' ? b.en : b.es)),
  ]

  return (
    <main className="bg-[#1F382E] min-h-screen pt-24 pb-16 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="font-garamond text-[#F3EEE3] text-4xl md:text-5xl mb-4">
            {tr.contacto.title}
          </h1>
          <p className="font-montserrat text-[#F3EEE3]/50 text-xs uppercase tracking-[0.1em]">
            {tr.contacto.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Left: direct contact */}
          <div className="flex flex-col gap-8">
            {/* WhatsApp */}
            <div className="p-8 border border-[#8FA67A]/20">
              <p className="font-montserrat text-[#F3EEE3]/30 text-[10px] uppercase tracking-[0.25em] mb-4">
                WhatsApp
              </p>
              <p className="font-garamond text-[#F3EEE3]/70 text-lg mb-6">
                {tr.contacto.whatsappLabel}
              </p>
              <a
                href={whatsappUrl(tr.messages.moreInfo)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 font-montserrat text-[#1F382E] bg-[#8FA67A] hover:bg-[#F3EEE3] text-xs uppercase tracking-[0.2em] px-8 py-4 transition-colors duration-300"
              >
                <WhatsAppIcon />
                +57 333 270 2366
              </a>
            </div>

            {/* Email */}
            <div className="p-8 border border-[#F3EEE3]/8">
              <p className="font-montserrat text-[#F3EEE3]/30 text-[10px] uppercase tracking-[0.25em] mb-4">
                Email
              </p>
              <p className="font-garamond text-[#F3EEE3]/70 text-lg mb-4">
                {tr.contacto.emailLabel}
              </p>
              <a
                href={`mailto:${tr.contacto.email}`}
                className="font-montserrat text-[#8FA67A] hover:text-[#F3EEE3] text-sm tracking-[0.1em] transition-colors duration-300"
              >
                {tr.contacto.email}
              </a>
            </div>

            {/* Ubicación */}
            <div className="p-8 border border-[#F3EEE3]/8">
              <p className="font-montserrat text-[#F3EEE3]/30 text-[10px] uppercase tracking-[0.25em] mb-4">
                {tr.ui.location}
              </p>
              <p className="font-garamond text-[#F3EEE3]/70 text-lg leading-relaxed">
                {tr.ubicacion.subtitle}
              </p>
            </div>
          </div>

          {/* Right: form */}
          <div className="flex flex-col">
            <p className="font-garamond text-[#F3EEE3]/60 text-xl mb-8">
              {tr.contacto.formTitle}
            </p>
            <form
              className="flex flex-col flex-1"
              onSubmit={(e) => {
                e.preventDefault()
                const form = e.currentTarget
                const nombre = (form.elements.namedItem('nombre') as HTMLInputElement).value
                const celular = (form.elements.namedItem('celular') as HTMLInputElement).value
                const email = (form.elements.namedItem('email') as HTMLInputElement).value
                const msg = (form.elements.namedItem('mensaje') as HTMLTextAreaElement).value
                if (!celular && !email) {
                  setContactoError(true)
                  return
                }
                setContactoError(false)
                const dialCode = COUNTRY_CODES.find(c => c.es === selectedCountryEs)?.code ?? '+57'
                const celularCompleto = celular ? `${dialCode} ${celular}` : ''
                const texto = [nombre, celularCompleto, email, msg].filter(Boolean).join(' — ')
                window.open(whatsappUrl(texto), '_blank')
              }}
            >
              <div className="flex flex-col gap-5">
                <div className="flex flex-col gap-2">
                  <label className="font-montserrat text-[#F3EEE3]/40 text-[10px] uppercase tracking-[0.2em]">
                    {tr.contacto.formNombre}
                  </label>
                  <input
                    name="nombre"
                    type="text"
                    required
                    className="bg-transparent border border-[#F3EEE3]/15 focus:border-[#8FA67A] outline-none px-4 py-3 font-montserrat text-[#F3EEE3] text-sm transition-colors duration-300"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-montserrat text-[#F3EEE3]/40 text-[10px] uppercase tracking-[0.2em]">
                    {tr.contacto.formCelular}
                  </label>
                  <div className="flex gap-2">
                    <select
                      value={selectedCountryEs}
                      onChange={(e) => setSelectedCountryEs(e.target.value)}
                      className="w-40 shrink-0 bg-[#1F382E] border border-[#F3EEE3]/15 focus:border-[#8FA67A] outline-none px-3 py-3 font-montserrat text-[#F3EEE3] text-sm transition-colors duration-300 cursor-pointer"
                    >
                      {sortedCodes.map(({ es, en }) => (
                        <option key={es} value={es} className="bg-[#1F382E]">
                          {lang === 'en' ? en : es}
                        </option>
                      ))}
                    </select>
                    <input
                      name="celular"
                      type="tel"
                      inputMode="numeric"
                      pattern="[0-9]*"
                      onInput={(e) => {
                        const input = e.currentTarget
                        input.value = input.value.replace(/\D/g, '')
                        if (input.value) setContactoError(false)
                      }}
                      className="flex-1 bg-transparent border border-[#F3EEE3]/15 focus:border-[#8FA67A] outline-none px-4 py-3 font-montserrat text-[#F3EEE3] text-sm transition-colors duration-300"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-montserrat text-[#F3EEE3]/40 text-[10px] uppercase tracking-[0.2em]">
                    {tr.contacto.formEmail}
                  </label>
                  <input
                    name="email"
                    type="email"
                    onChange={() => setContactoError(false)}
                    className="bg-transparent border border-[#F3EEE3]/15 focus:border-[#8FA67A] outline-none px-4 py-3 font-montserrat text-[#F3EEE3] text-sm transition-colors duration-300"
                  />
                </div>
                {contactoError && (
                  <p className="font-montserrat text-red-400 text-[10px] uppercase tracking-[0.15em]">
                    {tr.contacto.formValidacion}
                  </p>
                )}
                <div className="flex flex-col gap-2">
                  <label className="font-montserrat text-[#F3EEE3]/40 text-[10px] uppercase tracking-[0.2em]">
                    {tr.contacto.formMensaje}
                  </label>
                  <textarea
                    name="mensaje"
                    rows={5}
                    required
                    className="bg-transparent border border-[#F3EEE3]/15 focus:border-[#8FA67A] outline-none px-4 py-3 font-montserrat text-[#F3EEE3] text-sm resize-none transition-colors duration-300"
                  />
                </div>
              </div>
              <div className="flex-1" />
              <button
                type="submit"
                className="font-montserrat text-[#1F382E] bg-[#F3EEE3] hover:bg-[#8FA67A] text-xs uppercase tracking-[0.25em] px-8 py-4 transition-colors duration-300 self-start"
              >
                {tr.contacto.formEnviar}
              </button>
            </form>
          </div>
        </div>

        <div className="text-center mt-16">
          <Link
            href="/"
            className="font-montserrat text-[#F3EEE3]/50 hover:text-[#8FA67A] text-xs uppercase tracking-[0.2em] transition-colors duration-300"
          >
            {tr.ui.backHome}
          </Link>
        </div>
      </div>
    </main>
  )
}

export default function Contacto() {
  return (
    <PageLayout>
      <ContactoContent />
    </PageLayout>
  )
}
