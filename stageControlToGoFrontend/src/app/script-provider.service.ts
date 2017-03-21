import { Injectable } from '@angular/core';
import { Http } from "@angular/http";


import 'rxjs/add/operator/toPromise';

import { Script } from './script';

export const MOCKSCRIPT: Script = {
  Document: [
    {
      Name: "",
      Body: [
        {
          Type: "Seite",
          Body: "8",
          Line: 2
        }
      ],
      Line: 2
    },
    {
      Name: "Regie",
      Body: [
        {
          Type: "Text",
          Body: "Der tollste Tag -- Frei nach Beaumarchais von Peter Turrini Personen Figaro: ein Bediensteter -- Karl Friedrich Susanne: eine Zofe -- Konni Graf Almaviva: ein Schlossherr -- Donatus Gräfin Almaviva: seine Gemahlin -- Bärbel Bazillus: die Intrigantin des Grafen -- Christa Bartholo: ein Schlossbewohner -- Peter Marcelline: eine Schlossbewohnerin -- Angelika O. Cherubin: ein gehobener Diener -- Chris Don Guzmann di Stibizia: ein Richter -- Chris Zettelkopf: sein Schreiber -- Angelika Baur ein gräflicher Diener: -- Peter Gärtner: -- Peter Etwa 20 Minuten vor Beginn: Musik ab Titel 2 leise (ST auf etwa 1/8, etwa 8 Uhr-Stellung) anschalten. ",
          Line: 5
        }
      ],
      Line: 4
    },
    {
      Name: "",
      Body: [
        {
          Type: "Seite",
          Body: "9",
          Line: 49
        },
        {
          Type: "AudioEinstellung",
          Body: "Telefon",
          Line: 51
        },
        {
          Type: "Einstellung",
          Body: "Dunkel mit Musik leise",
          Line: 52
        }
      ],
      Line: 49
    },
    {
      Name: "Regie",
      Body: [
        {
          Type: "Text",
          Body: "Zuschauer nehmen Platz. Jetzt geht es los: ",
          Line: 54
        }
      ],
      Line: 53
    },
    {
      Name: "",
      Body: [
        {
          Type: "Einstellung",
          Body: "Aufbau",
          Line: 59
        }
      ],
      Line: 59
    },
    {
      Name: "Regie",
      Body: [
        {
          Type: "Text",
          Body: "Donatus macht Ansage. ",
          Line: 61
        }
      ],
      Line: 60
    },
    {
      Name: "",
      Body: [
        {
          Type: "Einstellung",
          Body: "Dunkel",
          Line: 63
        }
      ],
      Line: 63
    },
    {
      Name: "Regie",
      Body: [
        {
          Type: "Text",
          Body: "Titel 1 sehr laut (ST etwa auf weniger als 1/2 oder 11 Uhr-Stellung) anschalten. ",
          Line: 65
        }
      ],
      Line: 64
    },
    {
      Name: "",
      Body: [
        {
          Type: "LangsameEinstellung",
          Body: "Titel 1 (45s laut)",
          Line: 67
        }
      ],
      Line: 67
    },
    {
      Name: "Regie",
      Body: [
        {
          Type: "Text",
          Body: "Cherubin und Susanne rennen hinter die Bühne. Figaro tritt auf. Figaro kniet am Boden, mit dem Hintern zum Publikum. Er mißt den Boden aus. Bei Sekunde 45 Musik ausschalten d.h. ST auf dem Mischer ganz nach links drehen (aus). ",
          Line: 69
        }
      ],
      Line: 68
    },
    {
      Name: "FIGARO",
      Body: [
        {
          Type: "Text",
          Body: "Ja, mein Herr ist gütig. Von seinen siebenundsechzig Betten schenkt er mir ein ganzes. Wie kann so ein erlauchter Hintern nur siebenundsechzig Betten durchwetzen? ",
          Line: 78
        },
        {
          Type: "Regie",
          Body: "Figaro greift sich auf den eigenen und dreht sich blitzschnell um.",
          Line: 81
        }
      ],
      Line: 77
    },
    {
      Name: "",
      Body: [
        {
          Type: "Text",
          Body: "Selbst wenn ich die sämtlichen Hintern unserer Küchen-, Kammer- und Kellerzofen in Rechnung stelle, ist der Verschleiß beträchtlich. Nur das Maßlose ist aristokratisch, sagt mein Herr immer, wenn er mich schlägt. Ja, mein Herr ist gütig. Selbst mit seiner Hände Arbeit sorgt er für das verschärfte Wohl seiner Untergebenen. ",
          Line: 82
        }
      ],
      Line: 82
    },
    {
      Name: "Regie",
      Body: [
        {
          Type: "Text",
          Body: "Figaro mißt den Boden aus.",
          Line: 88
        }
      ],
      Line: 88
    },
    {
      Name: "",
      Body: [
        {
          Type: "Text",
          Body: "Siebenundvierzig auf elf ... ",
          Line: 89
        }
      ],
      Line: 89
    },
    {
      Name: "",
      Body: [
        {
          Type: "LangsameEinstellung",
          Body: "Es wird langsam hell",
          Line: 92
        }
      ],
      Line: 92
    },
    {
      Name: "SUSANNE",
      Body: [
        {
          Type: "Regie",
          Body: "Susanne schleicht von hinten heran und setzt sich auf Figaros Rücken.",
          Line: 95
        }
      ],
      Line: 94
    },
    {
      Name: "",
      Body: [],
      Line: 96
    },
    {
      Name: "",
      Body: [
        {
          Type: "Seite",
          Body: "10",
          Line: 98
        }
      ],
      Line: 98
    },
    {
      Name: "FIGARO",
      Body: [
        {
          Type: "Text",
          Body: "Oh, was für eine willkommene Last. Das ist Susanne, meine Braut, mein Engel. Die Göttin von Sevilla und Umgebung ... ",
          Line: 101
        }
      ],
      Line: 100
    },
    {
      Name: "SUSANNE",
      Body: [
        {
          Type: "Text",
          Body: "... die auf einem Esel reitet. ",
          Line: 106
        }
      ],
      Line: 105
    },
    {
      Name: "FIGARO",
      Body: [
        {
          Type: "Text",
          Body: "Dann bin ich der glücklichste Esel ... ",
          Line: 110
        }
      ],
      Line: 109
    },
    {
      Name: "SUSANNE",
      Body: [
        {
          Type: "Text",
          Body: "... von Sevilla und Umgebung ... ",
          Line: 114
        }
      ],
      Line: 113
    },
    {
      Name: "FIGARO",
      Body: [
        {
          Type: "Text",
          Body: "Noch nie hat ein zarteres Gewicht das Ende seiner Wirbelsäule umschmeichelt. Noch nie haben sich Backen so willig an Backen geschmiegt... ",
          Line: 118
        }
      ],
      Line: 117
    },
    {
      Name: "SUSANNE",
      Body: [
        {
          Type: "Text",
          Body: "Bleib sachlich! Was machst du hier am Boden? Du kniest in einem wildfremden Zimmer und murmelst Zahlen vor dich hin. ",
          Line: 124
        }
      ],
      Line: 123
    },
    {
      Name: "FIGARO",
      Body: [
        {
          Type: "Text",
          Body: "Primo ist dies kein wildfremdes, sondern unser Zimmer. Und secondo murmle ich nicht Zahlen, sondern vermesse den Standort unseres Bettes. Und terzo knie ich, weil du auf mir sitzt. ",
          Line: 130
        }
      ],
      Line: 129
    },
    {
      Name: "SUSANNE",
      Body: [
        {
          Type: "Regie",
          Body: "springt auf",
          Line: 137
        }
      ],
      Line: 136
    },
    {
      Name: "",
      Body: [
        {
          Type: "Text",
          Body: "Unser Zimmer? Unser Bett? ",
          Line: 137
        }
      ],
      Line: 137
    },
    {
      Name: "FIGARO",
      Body: [
        {
          Type: "Regie",
          Body: "steht auf und nimmt eine pathetische Haltung an",
          Line: 141
        }
      ],
      Line: 140
    },
    {
      Name: "",
      Body: [
        {
          Type: "Text",
          Body: "So höre, Schimpfende! Seine wohlweisliche Exzellenz, der Graf von Almaviva, haben uns in seiner gnädigen Güte dieses, sein siebenhundertvierundzwanzigstes Zimmer, und jenes, sein siebenundsechzigstes Bett, zum familiären Gebrauche überlassen. Was sagst du nun? ",
          Line: 142
        }
      ],
      Line: 142
    },
    {
      Name: "SUSANNE",
      Body: [
        {
          Type: "Text",
          Body: "Ich sage ... nun. ",
          Line: 150
        }
      ],
      Line: 149
    },
    {
      Name: "FIGARO",
      Body: [
        {
          Type: "Text",
          Body: "Nun? ",
          Line: 154
        }
      ],
      Line: 153
    },
    {
      Name: "SUSANNE",
      Body: [
        {
          Type: "Text",
          Body: "Nun, ja. ",
          Line: 158
        }
      ],
      Line: 157
    },
    {
      Name: "FIGARO",
      Body: [
        {
          Type: "Text",
          Body: "Ja? ",
          Line: 162
        }
      ],
      Line: 161
    },
    {
      Name: "SUSANNE",
      Body: [
        {
          Type: "Text",
          Body: "Nein. ",
          Line: 166
        }
      ],
      Line: 165
    },
    {
      Name: "FIGARO",
      Body: [
        {
          Type: "Text",
          Body: "Wieso nein? ",
          Line: 170
        }
      ],
      Line: 169
    },
    {
      Name: "SUSANNE",
      Body: [
        {
          Type: "Text",
          Body: "Wieso ja? ",
          Line: 174
        }
      ],
      Line: 173
    },
    {
      Name: "FIGARO",
      Body: [
        {
          Type: "Text",
          Body: "Weil zwischen nein und ja ein Grund liegt. ",
          Line: 178
        }
      ],
      Line: 177
    },
    {
      Name: "SUSANNE",
      Body: [
        {
          Type: "Text",
          Body: "Und wenn ich Grund genug hätte, den Grund nicht zu nennen? ",
          Line: 182
        }
      ],
      Line: 181
    },
    {
      Name: "FIGARO",
      Body: [
        {
          Type: "Text",
          Body: "Das wären zwei Gründe. Um so mehr Grund, sie zu nennen. Nun? ",
          Line: 187
        }
      ],
      Line: 186
    },
    {
      Name: "",
      Body: [
        {
          Type: "Seite",
          Body: "11",
          Line: 193
        }
      ],
      Line: 193
    },
    {
      Name: "SUSANNE",
      Body: [
        {
          Type: "Text",
          Body: "Nein. ",
          Line: 197
        }
      ],
      Line: 196
    },
    {
      Name: "FIGARO",
      Body: [
        {
          Type: "Text",
          Body: "Susannchen, ich überrede den Grafen, daß er uns auch seinen zweihundertvierundvierzigsten Teppich schenkt. Und die fehlende Einrichtung werden wir in unauffälligen Raten aus der Dachkammer herbeischaffen. ",
          Line: 201
        }
      ],
      Line: 200
    },
    {
      Name: "SUSANNE",
      Body: [
        {
          Type: "Text",
          Body: "Figarino, dieses Zimmer ist schön durch deine Gegenwart. ",
          Line: 209
        }
      ],
      Line: 208
    },
    {
      Name: "FIGARO",
      Body: [
        {
          Type: "Text",
          Body: "Dann lassen wir die Möbel! ",
          Line: 214
        }
      ],
      Line: 213
    },
    {
      Name: "SUSANNE",
      Body: [
        {
          Type: "Text",
          Body: "Und das Zimmer! ",
          Line: 218
        }
      ],
      Line: 217
    },
    {
      Name: "FIGARO",
      Body: [
        {
          Type: "Text",
          Body: "Was hast du bloß gegen dieses Zimmer? Die Abstellkammer der Herrschaften ist ein nobler Zufluchtsort für die Liebe der Bediensteten. Und außerdem liegt es genau zwischen den Gemächern der Brotgeber. ",
          Line: 222
        }
      ],
      Line: 221
    },
    {
      Name: "SUSANNE",
      Body: [
        {
          Type: "Text",
          Body: "Eben. ",
          Line: 229
        }
      ],
      Line: 228
    },
    {
      Name: "FIGARO",
      Body: [
        {
          Type: "Text",
          Body: "Eben das ist ein weiterer Vorteil dieses geglückten Raumes. Nachts, wenn die Herrin wegen Bauchweh läutet, schon setzt du hurtig ins feine Gemach über. Und ist dem Herrn was dringend Unnötiges gefällig, schon donnere ich diensteifrig zu seiner Verfügung. Du siehst, das Zimmer garantiert uns den kürzesten Dienstweg. ",
          Line: 233
        }
      ],
      Line: 232
    },
    {
      Name: "SUSANNE",
      Body: [
        {
          Type: "Text",
          Body: "Und dem Herrn Grafen den kürzesten Schleichweg. ",
          Line: 243
        }
      ],
      Line: 242
    },
    {
      Name: "FIGARO",
      Body: [
        {
          Type: "Text",
          Body: "Was willst du damit sagen? ",
          Line: 247
        }
      ],
      Line: 246
    },
    {
      Name: "SUSANNE",
      Body: [
        {
          Type: "Text",
          Body: "Daß der Weg, den du davondonnerst, vom Grafen jederzeit beschlichen werden kann. ",
          Line: 251
        }
      ],
      Line: 250
    },
    {
      Name: "FIGARO",
      Body: [
        {
          Type: "Text",
          Body: "Wenn er mich weit genug wegschickt! ",
          Line: 256
        }
      ],
      Line: 255
    },
    {
      Name: "SUSANNE",
      Body: [
        {
          Type: "Text",
          Body: "Wenn er dich weit genug wegschickt. ",
          Line: 260
        }
      ],
      Line: 259
    },
    {
      Name: "FIGARO",
      Body: [
        {
          Type: "Text",
          Body: "Wenn er mich weit genug wegschickt? Heiliges Osterei von Kastilien, ein fürchterlicher Verdacht klemmt sich in meiner Brust. ",
          Line: 264
        }
      ],
      Line: 263
    },
    {
      Name: "SUSANNE",
      Body: [
        {
          Type: "Text",
          Body: "Trotz alledem ein schönes Zimmer. ",
          Line: 270
        }
      ],
      Line: 269
    },
    {
      Name: "FIGARO",
      Body: [
        {
          Type: "Text",
          Body: "Es verliert zusehends. Glaubst du wirklich, daß mir der Graf Hörner aufsetzen will? Ich und ein Geweih? ",
          Line: 274
        }
      ],
      Line: 273
    },
    {
      Name: "SUSANNE",
      Body: [
        {
          Type: "Text",
          Body: "Ich weiß, was ich glaube. Bazillus übermittelt mir die Liebe seines Herrn am laufenden Meter. ",
          Line: 280
        }
      ],
      Line: 279
    },
    {
      Name: "",
      Body: [
        {
          Type: "Seite",
          Body: "12",
          Line: 286
        }
      ],
      Line: 286
    },
    {
      Name: "FIGARO",
      Body: [
        {
          Type: "Text",
          Body: "Bazillus, diese walische Schraube. Dieser Leichenbriefträger gräflicher Gefühle ... Ich werde ihn prügeln, daß er seinen Vornamen bis auf weiteres vergißt. ",
          Line: 290
        }
      ],
      Line: 289
    },
    {
      Name: "SUSANNE",
      Body: [
        {
          Type: "Text",
          Body: "Er ist ein treuer Schurke seines Herrn. ",
          Line: 297
        }
      ],
      Line: 296
    },
    {
      Name: "FIGARO",
      Body: [
        {
          Type: "Text",
          Body: "Der Herr Graf, hat er nicht selbst dieses Vorrecht der ersten Nacht abgeschafft? ",
          Line: 301
        }
      ],
      Line: 300
    },
    {
      Name: "SUSANNE",
      Body: [
        {
          Type: "Text",
          Body: "Um es bei mir wieder anzuschaffen. ",
          Line: 306
        }
      ],
      Line: 305
    },
    {
      Name: "FIGARO",
      Body: [
        {
          Type: "Text",
          Body: "Diese Anschaffung wird ihn teuer zu stehen kommen. ",
          Line: 310
        }
      ],
      Line: 309
    },
    {
      Name: "SUSANNE",
      Body: [
        {
          Type: "Text",
          Body: "Die erste Anzahlung hat er schon geleistet. Meine Ausstattung. ",
          Line: 314
        }
      ],
      Line: 313
    },
    {
      Name: "FIGARO",
      Body: [
        {
          Type: "Text",
          Body: "Was für ein gnädiger Vorschuß auf die Gunst meiner Geliebten! Und ich dachte, es sei der wohlverdiente Lohn meiner Treue! So viel Dummheit ist schmerzlich. ",
          Line: 318
        }
      ],
      Line: 317
    },
    {
      Name: "SUSANNE",
      Body: [
        {
          Type: "Text",
          Body: "Figaro denkt, der Graf lenkt. ",
          Line: 324
        }
      ],
      Line: 323
    },
    {
      Name: "FIGARO",
      Body: [
        {
          Type: "Text",
          Body: "Nicht mehr lange. Die Klugheit der Großen ist die Falschheit der Kleinen. Küsse mich, o Muse aller Schurken. Ein Himmelreich für eine gute Intrige. Ich könnte ihn als Ehrenmann fordern, ",
          Line: 328
        }
      ],
      Line: 327
    },
    {
      Name: "SUSANNE",
      Body: [
        {
          Type: "Text",
          Body: "aber die Ehre beginnt leider erst beim Baron. ",
          Line: 335
        }
      ],
      Line: 334
    },
    {
      Name: "FIGARO",
      Body: [
        {
          Type: "Text",
          Body: "Ich könnte ihn aus rasender Eifersucht töten, ",
          Line: 339
        }
      ],
      Line: 338
    },
    {
      Name: "SUSANNE",
      Body: [
        {
          Type: "Text",
          Body: "aber auch dieses Motiv gilt nur für Edelleute. ",
          Line: 343
        }
      ],
      Line: 342
    },
    {
      Name: "FIGARO",
      Body: [
        {
          Type: "Text",
          Body: "Ich könnte ihn wegen ungebührlicher Nachstellerei verklagen, ",
          Line: 347
        }
      ],
      Line: 346
    },
    {
      Name: "SUSANNE",
      Body: [
        {
          Type: "Text",
          Body: "aber leider beginnt die Gerechtigkeit erst bei hundert Goldstücken. ",
          Line: 351
        }
      ],
      Line: 350
    },
    {
      Name: "FIGARO",
      Body: [
        {
          Type: "Text",
          Body: "Da ist guter Rat teuer. ",
          Line: 356
        }
      ],
      Line: 355
    },
    {
      Name: "Regie",
      Body: [
        {
          Type: "Text",
          Body: "Es läutet. ",
          Line: 361
        }
      ],
      Line: 360
    },
    {
      Name: "SUSANNE",
      Body: [
        {
          Type: "Text",
          Body: "Das ist die Gräfin. Ich verschwinde. ",
          Line: 365
        }
      ],
      Line: 364
    },
    {
      Name: "FIGARO",
      Body: [
        {
          Type: "Text",
          Body: "Entschwinde nicht so flugs, mein Täubchen. Küß mich. Ein Kuß auf die Vorderlippe erhöht das Denkvermögen, wie die Professoren sagen. ",
          Line: 369
        }
      ],
      Line: 368
    },
    {
      Name: "SUSANNE",
      Body: [
        {
          Type: "Text",
          Body: "Und was wird morgen mein Mann sagen, wenn ich heute den Bräutigam küsse? ",
          Line: 375
        }
      ],
      Line: 374
    },
    {
      Name: "FIGARO",
      Body: [
        {
          Type: "Text",
          Body: "Ich erlaube es. Ausnahmsweise. ",
          Line: 380
        }
      ],
      Line: 379
    },
    {
      Name: "SUSANNE",
      Body: [
        {
          Type: "Regie",
          Body: "Susanne küßt ihn kurz.",
          Line: 384
        }
      ],
      Line: 383
    },
    {
      Name: "",
      Body: [
        {
          Type: "Text",
          Body: "Ausnahmsweise. ",
          Line: 384
        }
      ],
      Line: 384
    },
    {
      Name: "",
      Body: [
        {
          Type: "Seite",
          Body: "13",
          Line: 389
        }
      ],
      Line: 389
    },
    {
      Name: "Regie",
      Body: [
        {
          Type: "Text",
          Body: "Es läutet stärker. ",
          Line: 393
        }
      ],
      Line: 392
    },
    {
      Name: "FIGARO",
      Body: [
        {
          Type: "Text",
          Body: "Was für ein Kuß. Ich höre vor Seligkeit die Glocken läuten. ",
          Line: 397
        }
      ],
      Line: 396
    },
    {
      Name: "SUSANNE",
      Body: [
        {
          Type: "Regie",
          Body: "entsetzt",
          Line: 401
        }
      ],
      Line: 400
    },
    {
      Name: "",
      Body: [
        {
          Type: "Text",
          Body: "Die Gräfin. ",
          Line: 401
        }
      ],
      Line: 401
    },
    {
      Name: "Regie",
      Body: [
        {
          Type: "Text",
          Body: "ab",
          Line: 401
        }
      ],
      Line: 401
    },
    {
      Name: "",
      Body: [],
      Line: 403
    },
    {
      Name: "FIGARO",
      Body: [
        {
          Type: "Regie",
          Body: "allein",
          Line: 406
        }
      ],
      Line: 405
    },
    {
      Name: "",
      Body: [
        {
          Type: "Text",
          Body: "Weg ist sie, die honigsüße Biene. Daß hier der Graf den Mitschlecker spielen will, ist wider die Regeln meines Herzens. Jetzt geht mir ein Ballon auf. Mich befördert er zum Depeschenreiter, und während ich voll Schweiß und Treue dahinreite, reitet er voll Schweiß und Lust mein Susannchen. Während ich seinen Befehlen nachkomme, sorgt er für meine Nachkommenschaft. Würde doch nicht nur die Armut, sondern auch die Geilheit vor dem Adelsstande haltmachen. Diese Leidenschaft wird Ihnen noch leid tun, mein gnädiger Herr. Figaro, was macht ein Diener, dem weder Eifersucht noch Ehre noch Gerechtigkeit zugebilligt werden? Er wird schlecht, intrigant, falsch und verzeiht sich diese Eigenschaften zu besseren Zeiten. Mit der Glut seiner Leidenschaft werde ich dem Grafen das eigene Fell verbrennen und mit feuriger Bosheit die Mitgift in meine Taschen praktizieren. Das nenne ich Gerechtigkeit. ",
          Line: 407
        }
      ],
      Line: 407
    },
    {
      Name: "Regie",
      Body: [
        {
          Type: "Text",
          Body: "Bartholo, ein etwas heruntergekommener Medikus, und Marcelline, eine Dame in den mehr als besten Jahren, treten auf. ",
          Line: 429
        }
      ],
      Line: 428
    },
    {
      Name: "BARTHOLO",
      Body: [
        {
          Type: "Regie",
          Body: "zu Figaro",
          Line: 435
        }
      ],
      Line: 434
    },
    {
      Name: "",
      Body: [
        {
          Type: "Text",
          Body: "Natternkopf und Otternschwanz! Ist dieser ungebildete Schweinskopf auch hier? ",
          Line: 435
        }
      ],
      Line: 435
    },
    {
      Name: "FIGARO",
      Body: [
        {
          Type: "Text",
          Body: "Otternkopf und Natternschwanz! Ist dieses gebildete Schweinshaupt auch hier? ",
          Line: 440
        }
      ],
      Line: 439
    },
    {
      Name: "BARTHOLO",
      Body: [
        {
          Type: "Text",
          Body: "Wenn Sie nichts Klügeres zwischen Ihren Zähnen hervorpressen, mein Herr. ",
          Line: 445
        }
      ],
      Line: 444
    },
    {
      Name: "FIGARO",
      Body: [
        {
          Type: "Text",
          Body: "Ich will Sie nicht überfordern, mein Herr. ",
          Line: 450
        }
      ],
      Line: 449
    },
    {
      Name: "BARTHOLO",
      Body: [
        {
          Type: "Text",
          Body: "Das gelingt Ihnen bereits durch Ihre Gegenwart, mein Herr! ",
          Line: 454
        }
      ],
      Line: 453
    },
    {
      Name: "FIGARO",
      Body: [
        {
          Type: "Text",
          Body: "Auch die Ihre lastet schwer auf mir, mein Herr! ",
          Line: 458
        }
      ],
      Line: 457
    },
    {
      Name: "",
      Body: [
        {
          Type: "Seite",
          Body: "14",
          Line: 464
        }
      ],
      Line: 464
    },
    {
      Name: "BARTHOLO",
      Body: [
        {
          Type: "Text",
          Body: "Mein Herr! ",
          Line: 468
        }
      ],
      Line: 467
    },
    {
      Name: "FIGARO",
      Body: [
        {
          Type: "Regie",
          Body: "äfft ihn nach",
          Line: 472
        }
      ],
      Line: 471
    },
    {
      Name: "",
      Body: [
        {
          Type: "Text",
          Body: "Mein Herr! ",
          Line: 472
        }
      ],
      Line: 472
    },
    {
      Name: "MARCELLINE",
      Body: [
        {
          Type: "Text",
          Body: "Meine Herren! Ihre Höflichkeit übersteigt das Maß des Erlaubten. ",
          Line: 476
        }
      ],
      Line: 475
    },
    {
      Name: "FIGARO",
      Body: [
        {
          Type: "Text",
          Body: "Madame, ich überlasse Euch gerne seine unerträgliche Gegenwart. Adieu, mein Herr, und denken Sie sich ein teures Hochzeitsgeschenk aus. ",
          Line: 481
        }
      ],
      Line: 480
    },
    {
      Name: "BARTHOLO",
      Body: [
        {
          Type: "Text",
          Body: "Worauf du mein Gift nehmen kannst! ",
          Line: 487
        }
      ],
      Line: 486
    },
    {
      Name: "FIGARO",
      Body: [
        {
          Type: "Regie",
          Body: "ab",
          Line: 491
        }
      ],
      Line: 490
    },
    {
      Name: "",
      Body: [],
      Line: 492
    },
    {
      Name: "BARTHOLO",
      Body: [
        {
          Type: "Text",
          Body: "Verfluchte Mutter Gottes, dieser Kerl ist mir widerlicher als ein kranker Steinklopfer. Ein Geschwülst von Adel ist mir lieber als das Gesicht eines Dieners. Was sind die kranken, blassen, zarten Lippen einer Komtesse gegen den stinkenden Mund einer gesunden Magd? Pestilenz und Petrus, warum darf das Volk krank werden, da uns schon vor seiner Gesundheit ekelt? ",
          Line: 495
        }
      ],
      Line: 494
    },
    {
      Name: "MARCELLINE",
      Body: [
        {
          Type: "Text",
          Body: "Ihr habt nichts als Eure Profession im gebildeten Kopf. ",
          Line: 506
        }
      ],
      Line: 505
    },
    {
      Name: "BARTHOLO",
      Body: [
        {
          Type: "Text",
          Body: "Weil die Profession die Bildung macht, meine Dame. Aber zur Sache. Warum haben Sie mich herbestellt? Ist jemand krank? ",
          Line: 510
        }
      ],
      Line: 509
    },
    {
      Name: "MARCELLINE",
      Body: [
        {
          Type: "Text",
          Body: "Der Graf. ",
          Line: 515
        }
      ],
      Line: 514
    },
    {
      Name: "BARTHOLO",
      Body: [
        {
          Type: "Text",
          Body: "Der Graf? ",
          Line: 519
        }
      ],
      Line: 518
    },
    {
      Name: "MARCELLINE",
      Body: [
        {
          Type: "Text",
          Body: "Eine schreckliche Krankheit. Sie befällt ihn beim Anblick eines schönen Mädchens. ",
          Line: 523
        }
      ],
      Line: 522
    },
    {
      Name: "BARTHOLO",
      Body: [
        {
          Type: "Text",
          Body: "Infiscation! ",
          Line: 528
        }
      ],
      Line: 527
    },
    {
      Name: "MARCELLINE",
      Body: [
        {
          Type: "Text",
          Body: "Steigert sich mit Einbruch der Dämmerung. ",
          Line: 532
        }
      ],
      Line: 531
    },
    {
      Name: "BARTHOLO",
      Body: [
        {
          Type: "Text",
          Body: "Convulsion! ",
          Line: 536
        }
      ],
      Line: 535
    },
    {
      Name: "MARCELLINE",
      Body: [
        {
          Type: "Text",
          Body: "Und tobt die halbe Nacht. ",
          Line: 540
        }
      ],
      Line: 539
    },
    {
      Name: "BARTHOLO",
      Body: [
        {
          Type: "Text",
          Body: "Explosion! Alles klario! Ich diagnostiziere auf Fleckfieber. ",
          Line: 544
        }
      ],
      Line: 543
    },
    {
      Name: "MARCELLINE",
      Body: [
        {
          Type: "Text",
          Body: "Ich diagnostiziere auf Untreue. ",
          Line: 549
        }
      ],
      Line: 548
    },
    {
      Name: "BARTHOLO",
      Body: [
        {
          Type: "Text",
          Body: "Diese Krankheit kommt bei Standespersonen offiziell nicht vor. ",
          Line: 553
        }
      ],
      Line: 552
    },
    {
      Name: "MARCELLINE",
      Body: [
        {
          Type: "Text",
          Body: "Inoffiziell schleicht sich der Graf jede Nacht in die Kammern der Weiber. ",
          Line: 558
        }
      ],
      Line: 557
    },
    {
      Name: "",
      Body: [
        {
          Type: "Seite",
          Body: "15",
          Line: 564
        }
      ],
      Line: 564
    },
    {
      Name: "BARTHOLO",
      Body: [
        {
          Type: "Text",
          Body: "Sagen wir, er inspiziert seinen Besitz durch Nachtarbeit. ",
          Line: 568
        }
      ],
      Line: 567
    },
    {
      Name: "MARCELLINE",
      Body: [
        {
          Type: "Text",
          Body: "Schon morgen wird er dieses Zimmer inspizieren. ",
          Line: 573
        }
      ],
      Line: 572
    },
    {
      Name: "BARTHOLO",
      Body: [
        {
          Type: "Text",
          Body: "Ein fleißiger Graf. ",
          Line: 577
        }
      ],
      Line: 576
    },
    {
      Name: "MARCELLINE",
      Body: [
        {
          Type: "Text",
          Body: "Und Susannes Bett. ",
          Line: 581
        }
      ],
      Line: 580
    },
    {
      Name: "BARTHOLO",
      Body: [
        {
          Type: "Text",
          Body: "Vortrefflich! Dann bekommt Figaro einen Denkzettel, der Graf sein Vergnügen und Susanne den Grafen. ",
          Line: 585
        }
      ],
      Line: 584
    },
    {
      Name: "MARCELLINE",
      Body: [
        {
          Type: "Text",
          Body: "Und ich bleibe übrig. ",
          Line: 591
        }
      ],
      Line: 590
    },
    {
      Name: "BARTHOLO",
      Body: [
        {
          Type: "Text",
          Body: "Tragen Sie es mit Würde, die Ihrem Alter entspricht. ",
          Line: 595
        }
      ],
      Line: 594
    },
    {
      Name: "MARCELLINE",
      Body: [
        {
          Type: "Text",
          Body: "Diese Bemerkung entspräche einer Ohrfeige, Sie ungehobelter Mediziner: Bin ich nicht allein, weil Sie mich in diesem Zustande belassen haben? Haben Sie nicht Ihr damaliges Heiratsversprechen gebrochen ... ",
          Line: 599
        }
      ],
      Line: 598
    },
    {
      Name: "BARTHOLO",
      Body: [
        {
          Type: "Text",
          Body: "Zores und Mores! Müssen Sie jede schlechte Gelegenheit dazu benutzen, mir diese albernen Grillen unter die Weste zu jubeln? Was wollen Sie? Daß wir hundertjähriges Jubiläum einer verflossenen Liebschaft feiern? ",
          Line: 606
        }
      ],
      Line: 605
    },
    {
      Name: "MARCELLINE",
      Body: [
        {
          Type: "Text",
          Body: "Ich brauche Ihre Hilfe, Doktor. ",
          Line: 613
        }
      ],
      Line: 612
    },
    {
      Name: "BARTHOLO",
      Body: [
        {
          Type: "Text",
          Body: "Wenn sie nicht gegen das Gesetz und meinen Vorteil ist ... ",
          Line: 617
        }
      ],
      Line: 616
    },
    {
      Name: "MARCELLINE",
      Body: [
        {
          Type: "Text",
          Body: "Ich liebe einen Mann. ",
          Line: 621
        }
      ],
      Line: 620
    },
    {
      Name: "BARTHOLO",
      Body: [
        {
          Type: "Text",
          Body: "Die Krankheit ist häufig. ",
          Line: 625
        }
      ],
      Line: 624
    },
    {
      Name: "MARCELLINE",
      Body: [
        {
          Type: "Text",
          Body: "Es ist Figaro. ",
          Line: 629
        }
      ],
      Line: 628
    },
    {
      Name: "BARTHOLO",
      Body: [
        {
          Type: "Text",
          Body: "Die Dummheit ist selten! Was treibt eine reife Frau in die Arme dieses jungen Flegels? ",
          Line: 633
        }
      ],
      Line: 632
    },
    {
      Name: "MARCELLINE",
      Body: [
        {
          Type: "Text",
          Body: "Die Reife, mein Herr. ",
          Line: 638
        }
      ],
      Line: 637
    },
    {
      Name: "BARTHOLO",
      Body: [
        {
          Type: "Text",
          Body: "Dann treten Sie mit ihm in den Stand der Ehe. ",
          Line: 642
        }
      ],
      Line: 641
    },
    {
      Name: "MARCELLINE",
      Body: [
        {
          Type: "Text",
          Body: "In denselben tritt er noch heute mit Susanne. ",
          Line: 646
        }
      ],
      Line: 645
    },
    {
      Name: "BARTHOLO",
      Body: [
        {
          Type: "Text",
          Body: "Dann treten Sie wieder zurück. ",
          Line: 650
        }
      ],
      Line: 649
    },
    {
      Name: "MARCELLINE",
      Body: [
        {
          Type: "Text",
          Body: "Mehr als diese dumme Treterei haben Sie mir nicht zu raten, Doktor? ",
          Line: 654
        }
      ],
      Line: 653
    },
    {
      Name: "",
      Body: [
        {
          Type: "Seite",
          Body: "16",
          Line: 660
        }
      ],
      Line: 660
    },
    {
      Name: "BARTHOLO",
      Body: [
        {
          Type: "Text",
          Body: "Da ist guter Rat teuer. ",
          Line: 664
        }
      ],
      Line: 663
    },
    {
      Name: "MARCELLINE",
      Body: [
        {
          Type: "Regie",
          Body: "macht sich an ihn heran",
          Line: 668
        }
      ],
      Line: 667
    },
    {
      Name: "",
      Body: [
        {
          Type: "Text",
          Body: "Früher war Ihnen meine Gunst etwas wert. ",
          Line: 668
        }
      ],
      Line: 668
    },
    {
      Name: "BARTHOLO",
      Body: [
        {
          Type: "Text",
          Body: "Ihr Wert ist gesunken, Madame. ",
          Line: 673
        }
      ],
      Line: 672
    },
    {
      Name: "MARCELLINE",
      Body: [
        {
          Type: "Regie",
          Body: "Marcelline zählt Geldstücke in die offene Hand Bartholos. Er läßt sie möglichst lange offen.",
          Line: 677
        }
      ],
      Line: 676
    },
    {
      Name: "",
      Body: [
        {
          Type: "Text",
          Body: "Ihre Preise sind gestiegen, mein Herr. Nun reden Sie schon, gieriger Frosch. ",
          Line: 679
        }
      ],
      Line: 679
    },
    {
      Name: "BARTHOLO",
      Body: [
        {
          Type: "Regie",
          Body: "läßt die Goldstücke in den geschlossenen Händen klimpern",
          Line: 684
        }
      ],
      Line: 683
    },
    {
      Name: "",
      Body: [
        {
          Type: "Text",
          Body: "Gemach, gemach. Ein guter Plan braucht Inspiration. Sie lieben Figaro? ",
          Line: 685
        }
      ],
      Line: 685
    },
    {
      Name: "MARCELLINE",
      Body: [
        {
          Type: "Text",
          Body: "So ist es. ",
          Line: 690
        }
      ],
      Line: 689
    },
    {
      Name: "BARTHOLO",
      Body: [
        {
          Type: "Text",
          Body: "Figaro liebt Susanne? ",
          Line: 694
        }
      ],
      Line: 693
    },
    {
      Name: "MARCELLINE",
      Body: [
        {
          Type: "Text",
          Body: "So scheint es. ",
          Line: 698
        }
      ],
      Line: 697
    },
    {
      Name: "BARTHOLO",
      Body: [
        {
          Type: "Text",
          Body: "Interessant. ",
          Line: 702
        }
      ],
      Line: 701
    },
    {
      Name: "MARCELLINE",
      Body: [
        {
          Type: "Text",
          Body: "Bekannt. ",
          Line: 706
        }
      ],
      Line: 705
    },
    {
      Name: "BARTHOLO",
      Body: [
        {
          Type: "Text",
          Body: "Attenzione. Figaro heiratet Susanne, und der Graf ist der lachende Dritte. ",
          Line: 710
        }
      ],
      Line: 709
    },
    {
      Name: "MARCELLINE",
      Body: [
        {
          Type: "Text",
          Body: "Und ich die weinende Vierte. ",
          Line: 715
        }
      ],
      Line: 714
    },
    {
      Name: "BARTHOLO",
      Body: [
        {
          Type: "Text",
          Body: "Attenzione, sage ich, was ist den Weibern wichtiger als die Moral? ",
          Line: 719
        }
      ],
      Line: 718
    },
    {
      Name: "MARCELLINE",
      Body: [
        {
          Type: "Text",
          Body: "Ihr Ruf! ",
          Line: 724
        }
      ],
      Line: 723
    },
    {
      Name: "BARTHOLO",
      Body: [
        {
          Type: "Text",
          Body: "Und was verliert Susanne, wenn wir die Neigungen des Grafen offenbaren? ",
          Line: 728
        }
      ],
      Line: 727
    },
    {
      Name: "MARCELLINE",
      Body: [
        {
          Type: "Text",
          Body: "Ihren Ruf! ",
          Line: 733
        }
      ],
      Line: 732
    },
    {
      Name: "BARTHOLO",
      Body: [
        {
          Type: "Text",
          Body: "Figaro wird sich von ihr abwenden ... ",
          Line: 737
        }
      ],
      Line: 736
    },
    {
      Name: "MARCELLINE",
      Body: [
        {
          Type: "Text",
          Body: "... und mir zuwenden. Doktor, Sie sind ein Genie an Schlechtigkeit. ",
          Line: 741
        }
      ],
      Line: 740
    },
    {
      Name: "BARTHOLO",
      Body: [
        {
          Type: "Text",
          Body: "Man tut, was man kann. ",
          Line: 746
        }
      ],
      Line: 745
    },
    {
      Name: "MARCELLINE",
      Body: [
        {
          Type: "Text",
          Body: "Nehmen Sie diesen Kuß als Draufgabe. ",
          Line: 750
        }
      ],
      Line: 749
    },
    {
      Name: "SUSANNE",
      Body: [
        {
          Type: "Regie",
          Body: "Susanne tritt auf. Räuspert sich",
          Line: 754
        }
      ],
      Line: 753
    },
    {
      Name: "",
      Body: [
        {
          Type: "Text",
          Body: "Verzeihung, ich wollte die älteren Herrschaften nicht stören. Ich hab' was übrig für die Glut der späten Jahre. ",
          Line: 755
        }
      ],
      Line: 755
    },
    {
      Name: "MARCELLINE",
      Body: [
        {
          Type: "Text",
          Body: "Zwanzig und schon so frech. ",
          Line: 761
        }
      ],
      Line: 760
    },
    {
      Name: "",
      Body: [
        {
          Type: "Seite",
          Body: "17",
          Line: 766
        }
      ],
      Line: 766
    },
    {
      Name: "SUSANNE",
      Body: [
        {
          Type: "Text",
          Body: "Siebzig und noch so geil. ",
          Line: 770
        }
      ],
      Line: 769
    },
    {
      Name: "MARCELLINE",
      Body: [
        {
          Type: "Regie",
          Body: "übertrieben freundlich",
          Line: 774
        }
      ],
      Line: 773
    },
    {
      Name: "",
      Body: [
        {
          Type: "Text",
          Body: "Wie geht's dem Grafen? ",
          Line: 774
        }
      ],
      Line: 774
    },
    {
      Name: "SUSANNE",
      Body: [
        {
          Type: "Text",
          Body: "Er geht seiner Wege. ",
          Line: 778
        }
      ],
      Line: 777
    },
    {
      Name: "MARCELLINE",
      Body: [
        {
          Type: "Text",
          Body: "Die ihn bald in dieses Zimmer führen werden ... ",
          Line: 782
        }
      ],
      Line: 781
    },
    {
      Name: "SUSANNE",
      Body: [
        {
          Type: "Text",
          Body: "Das ist sein gutes Recht. ",
          Line: 786
        }
      ],
      Line: 785
    },
    {
      Name: "MARCELLINE",
      Body: [
        {
          Type: "Text",
          Body: "Und just in Susannes Bettchen. ",
          Line: 790
        }
      ],
      Line: 789
    },
    {
      Name: "BARTHOLO",
      Body: [
        {
          Type: "Regie",
          Body: "Susanne nachäffend",
          Line: 794
        }
      ],
      Line: 793
    },
    {
      Name: "",
      Body: [
        {
          Type: "Text",
          Body: "Das ist sein gutes Recht... ",
          Line: 794
        }
      ],
      Line: 794
    },
    {
      Name: "MARCELLINE",
      Body: [
        {
          Type: "Text",
          Body: "... der Jungfer die Ehre zu nehmen. ",
          Line: 798
        }
      ],
      Line: 797
    },
    {
      Name: "SUSANNE",
      Body: [
        {
          Type: "Text",
          Body: "Wie traurig für Euch, daß Ihr sie nicht mehr zu vergeben habt. ",
          Line: 802
        }
      ],
      Line: 801
    },
    {
      Name: "MARCELLINE",
      Body: [
        {
          Type: "Text",
          Body: "Grafenliebchen! ",
          Line: 807
        }
      ],
      Line: 806
    },
    {
      Name: "SUSANNE",
      Body: [
        {
          Type: "Text",
          Body: "Keine Ehre und kein Benehmen. Euch sind wirklich nur die Falten geblieben. ",
          Line: 811
        }
      ],
      Line: 810
    },
    {
      Name: "MARCELLINE",
      Body: [
        {
          Type: "Text",
          Body: "Hurenkind. ",
          Line: 816
        }
      ],
      Line: 815
    },
    {
      Name: "SUSANNE",
      Body: [
        {
          Type: "Text",
          Body: "Wenn Ihr sprecht, gleicht Euer Gesicht einer Ziehharmonika, auf der man einen Trauermarsch spielt. ",
          Line: 820
        }
      ],
      Line: 819
    },
    {
      Name: "MARCELLINE",
      Body: [
        {
          Type: "Text",
          Body: "Doktor, halten Sie mich. Ich stürze mich auf sie. ",
          Line: 825
        }
      ],
      Line: 824
    },
    {
      Name: "SUSANNE",
      Body: [
        {
          Type: "Text",
          Body: "Doktor, halten Sie doch die alte Dame, bevor sie stürzt. ",
          Line: 830
        }
      ],
      Line: 829
    },
    {
      Name: "BARTHOLO",
      Body: [
        {
          Type: "Text",
          Body: "Donner und Dolores, halt, sage ich. ",
          Line: 835
        }
      ],
      Line: 834
    },
    {
      Name: "SUSANNE",
      Body: [
        {
          Type: "Text",
          Body: "Donner und Dolores, hinaus, sage ich. ",
          Line: 839
        }
      ],
      Line: 838
    },
    {
      Name: "BARTHOLO",
      Body: [
        {
          Type: "Text",
          Body: "Gehen wir, Marcelline. Susannchen brennt darauf, ihrem heißgeliebten Figaro die Hörner aufzusetzen. ",
          Line: 843
        }
      ],
      Line: 842
    },
    {
      Name: "Regie",
      Body: [
        {
          Type: "Text",
          Body: "Marcelline und Bartholo ab ",
          Line: 848
        }
      ],
      Line: 847
    },
    {
      Name: "SUSANNE",
      Body: [
        {
          Type: "Regie",
          Body: "ruft ihnen nach",
          Line: 852
        }
      ],
      Line: 851
    },
    {
      Name: "",
      Body: [
        {
          Type: "Text",
          Body: "Die Hölle ist zwei Stock tiefer. ",
          Line: 852
        }
      ],
      Line: 852
    },
    {
      Name: "Regie",
      Body: [
        {
          Type: "Text",
          Body: "Susanne allein",
          Line: 853
        }
      ],
      Line: 853
    },
    {
      Name: "",
      Body: [
        {
          Type: "Text",
          Body: "Das ist ein Teufelspaar. Mit ihrer Bosheit könnten sie ganze Landstriche unglücklich machen, warum quälen sie ausgerechnet mich? Ist die Liebe eines Dienstmädchens eine Weide, auf der jeder falsche Ochs herumtrampeln kann? Was habe ich ihnen getan? Ich liebe Figaro, das ist alles. Ja, das ist alles. ",
          Line: 854
        }
      ],
      Line: 854
    },
    {
      Name: "Regie",
      Body: [
        {
          Type: "Text",
          Body: "Sprechgesang",
          Line: 860
        }
      ],
      Line: 860
    },
    {
      Name: "",
      Body: [
        {
          Type: "Text",
          Body: "Die Augen ",
          Line: 860
        }
      ],
      Line: 860
    },
    {
      Name: "",
      Body: [
        {
          Type: "Seite",
          Body: "18",
          Line: 865
        }
      ],
      Line: 865
    },
    {
      Name: "SUSANNE",
      Body: [
        {
          Type: "Text",
          Body: "meines Geliebten finden alle Schätze meines Herzens, seine Hände heben sie. ",
          Line: 869
        }
      ],
      Line: 868
    },
    {
      Name: "CHERUBIN",
      Body: [
        {
          Type: "Regie",
          Body: "auf",
          Line: 874
        }
      ],
      Line: 873
    },
    {
      Name: "",
      Body: [
        {
          Type: "Text",
          Body: "Susanne singt? ",
          Line: 874
        }
      ],
      Line: 874
    },
    {
      Name: "SUSANNE",
      Body: [
        {
          Type: "Text",
          Body: "Susanne lacht. ",
          Line: 878
        }
      ],
      Line: 877
    },
    {
      Name: "CHERUBIN",
      Body: [
        {
          Type: "Text",
          Body: "Cherubin weint. ",
          Line: 882
        }
      ],
      Line: 881
    },
    {
      Name: "SUSANNE",
      Body: [
        {
          Type: "Text",
          Body: "Das paßt nicht zu einem lustigen Pagen. ",
          Line: 886
        }
      ],
      Line: 885
    },
    {
      Name: "CHERUBIN",
      Body: [
        {
          Type: "Text",
          Body: "Aber zu einem entlassenen. ",
          Line: 890
        }
      ],
      Line: 889
    },
    {
      Name: "SUSANNE",
      Body: [
        {
          Type: "Text",
          Body: "Hat dir ein Mädchen den Laufpaß gegeben? ",
          Line: 894
        }
      ],
      Line: 893
    },
    {
      Name: "CHERUBIN",
      Body: [
        {
          Type: "Text",
          Body: "Schlimmer. ",
          Line: 898
        }
      ],
      Line: 897
    },
    {
      Name: "SUSANNE",
      Body: [
        {
          Type: "Text",
          Body: "Noch schlimmer? ",
          Line: 902
        }
      ],
      Line: 901
    },
    {
      Name: "CHERUBIN",
      Body: [
        {
          Type: "Text",
          Body: "Schlimmstens. Es war ein Herr von Stand. Der Graf hat mich entlassen. ",
          Line: 906
        }
      ],
      Line: 905
    },
    {
      Name: "SUSANNE",
      Body: [
        {
          Type: "Text",
          Body: "Was hat der alte Bock gegen dein junges Blut? ",
          Line: 911
        }
      ],
      Line: 910
    },
    {
      Name: "CHERUBIN",
      Body: [
        {
          Type: "Text",
          Body: "Mein junges Blut hat sich ein wenig an der kleinen Blanchette vergriffen. Ich habe ihr sozusagen die Anfangsgründe der Anatomie beigebracht. Eine süße Lektion! ",
          Line: 915
        }
      ],
      Line: 914
    },
    {
      Name: "SUSANNE",
      Body: [
        {
          Type: "Text",
          Body: "Weiter. ",
          Line: 922
        }
      ],
      Line: 921
    },
    {
      Name: "CHERUBIN",
      Body: [
        {
          Type: "Text",
          Body: "Ein bitteres Erwachen! Dann plötzlich kommt der Graf dazwischen und brüllt, daß die Stiere fliegen. Er schreit ... ",
          Line: 926
        }
      ],
      Line: 925
    },
    {
      Name: "SUSANNE",
      Body: [
        {
          Type: "Text",
          Body: "Was? ",
          Line: 932
        }
      ],
      Line: 931
    },
    {
      Name: "CHERUBIN",
      Body: [
        {
          Type: "Text",
          Body: "Daß! ",
          Line: 936
        }
      ],
      Line: 935
    },
    {
      Name: "SUSANNE",
      Body: [
        {
          Type: "Text",
          Body: "Was daß? ",
          Line: 940
        }
      ],
      Line: 939
    },
    {
      Name: "CHERUBIN",
      Body: [
        {
          Type: "Text",
          Body: "Daß ich der letzte Schwanz von Kastilien sei und ob ich der amtliche Zureiter seiner Mägde wäre und ... ",
          Line: 944
        }
      ],
      Line: 943
    },
    {
      Name: "SUSANNE",
      Body: [
        {
          Type: "Text",
          Body: "Das genügt. ",
          Line: 950
        }
      ],
      Line: 949
    },
    {
      Name: "CHERUBIN",
      Body: [
        {
          Type: "Text",
          Body: "Für eine Entlassung. Susannchen, hilf mir. Sonst bin ich für immer von deinem Angesicht verbannt. ",
          Line: 954
        }
      ],
      Line: 953
    },
    {
      Name: "SUSANNE",
      Body: [
        {
          Type: "Text",
          Body: "Es wird mich schmerzen. ",
          Line: 960
        }
      ],
      Line: 959
    },
    {
      Name: "CHERUBIN",
      Body: [
        {
          Type: "Text",
          Body: "Es wird mich töten. ",
          Line: 964
        }
      ],
      Line: 963
    },
    {
      Name: "SUSANNE",
      Body: [
        {
          Type: "Text",
          Body: "Du wirst auch das überleben. ",
          Line: 968
        }
      ],
      Line: 967
    },
    {
      Name: "CHERUBIN",
      Body: [
        {
          Type: "Text",
          Body: "Aber wie. Ich werde hungrig und zerrissen durch die deutschen Sümpfe waten, meine müden Augen suchen vergeblich nach dem Trost deiner Schönheit. ",
          Line: 972
        }
      ],
      Line: 971
    },
    {
      Name: "",
      Body: [
        {
          Type: "Seite",
          Body: "19",
          Line: 980
        }
      ],
      Line: 980
    },
    {
      Name: "SUSANNE",
      Body: [
        {
          Type: "Text",
          Body: "Moment, du Schürzenschlingel. Ist nicht die Gräfin deine heimliche Liebe? Hast du nicht sämtlichen Mägden den Hintern verdreht? Jetzt bin wohl ich an der Reihe? ",
          Line: 984
        }
      ],
      Line: 983
    },
    {
      Name: "CHERUBIN",
      Body: [
        {
          Type: "Text",
          Body: "Du hast recht. Aber die Gräfin ist so weit entfernt, daß ich nur für sie schwärmen kann. Dich aber kann ich lieben. ",
          Line: 991
        }
      ],
      Line: 990
    },
    {
      Name: "SUSANNE",
      Body: [
        {
          Type: "Text",
          Body: "Gott sei Dank bist du nicht so weit entfernt, daß ich dich nicht ohrfeigen kann. ",
          Line: 996
        },
        {
          Type: "Regie",
          Body: "läuft ihm nach",
          Line: 998
        }
      ],
      Line: 995
    },
    {
      Name: "",
      Body: [],
      Line: 999
    },
    {
      Name: "CHERUBIN",
      Body: [
        {
          Type: "Text",
          Body: "Rette mich, Susanne, sonst bin ich verloren. ",
          Line: 1002
        }
      ],
      Line: 1001
    },
    {
      Name: "SUSANNE",
      Body: [
        {
          Type: "Regie",
          Body: "lacht und bleibt stehen",
          Line: 1006
        }
      ],
      Line: 1005
    },
    {
      Name: "",
      Body: [
        {
          Type: "Text",
          Body: "Wie soll es mir gelingen, den Grafen umzustimmen? ",
          Line: 1007
        }
      ],
      Line: 1007
    },
    {
      Name: "CHERUBIN",
      Body: [
        {
          Type: "Text",
          Body: "Wie ich höre, hast du seine Gunst. ",
          Line: 1011
        }
      ],
      Line: 1010
    },
    {
      Name: "SUSANNE",
      Body: [
        {
          Type: "Text",
          Body: "Wie ich höre, hast du deine Frechheit wieder. ",
          Line: 1015
        }
      ],
      Line: 1014
    },
    {
      Name: "CHERUBIN",
      Body: [
        {
          Type: "Text",
          Body: "Leg ein gutes Wort für mich ein. ",
          Line: 1019
        }
      ],
      Line: 1018
    },
    {
      Name: "SUSANNE",
      Body: [
        {
          Type: "Text",
          Body: "Und mich dazu? ",
          Line: 1023
        }
      ],
      Line: 1022
    },
    {
      Name: "CHERUBIN",
      Body: [
        {
          Type: "Text",
          Body: "Wenn's sein muß. ",
          Line: 1027
        }
      ],
      Line: 1026
    },
    {
      Name: "SUSANNE",
      Body: [
        {
          Type: "Text",
          Body: "Warum könnt ihr alle über meine Liebe zu Figaro verfügen? Wieviel ist sie euch eigentlich wert? Sie gehört mir. Mir. ",
          Line: 1031
        }
      ],
      Line: 1030
    },
    {
      Name: "CHERUBIN",
      Body: [
        {
          Type: "Text",
          Body: "Ich verstehe dich nicht, Susannchen. ",
          Line: 1037
        }
      ],
      Line: 1036
    },
    {
      Name: "SUSANNE",
      Body: [
        {
          Type: "Text",
          Body: "Ich verstehe dich auch nicht, Cherubin. ",
          Line: 1041
        }
      ],
      Line: 1040
    },
    {
      Name: "Regie",
      Body: [
        {
          Type: "Text",
          Body: "Man hört Schritte und Getöse. ",
          Line: 1046
        }
      ],
      Line: 1045
    },
    {
      Name: "CHERUBIN",
      Body: [
        {
          Type: "Text",
          Body: "Ich höre etwas, Susannchen. ",
          Line: 1050
        }
      ],
      Line: 1049
    },
    {
      Name: "SUSANNE",
      Body: [
        {
          Type: "Text",
          Body: "O Gott, der Graf! ",
          Line: 1054
        }
      ],
      Line: 1053
    },
    {
      Name: "CHERUBIN",
      Body: [
        {
          Type: "Text",
          Body: "Der Graf? O Gott! ",
          Line: 1058
        },
        {
          Type: "Regie",
          Body: "Cherubin verschwindet blitzschnell unterm Lehnstuhl.",
          Line: 1059
        }
      ],
      Line: 1057
    },
    {
      Name: "",
      Body: [],
      Line: 1061
    },
    {
      Name: "",
      Body: [
        {
          Type: "Einstellung",
          Body: "Voll Hell",
          Line: 1063
        }
      ],
      Line: 1063
    },
    {
      Name: "Regie",
      Body: [
        {
          Type: "Text",
          Body: "Der Graf tritt ein. Vor ihm schreitet ein Diener. Er klopft mit dem Stock dreimal auf den Boden. Alles erstarrt zur Pose. ",
          Line: 1066
        }
      ],
      Line: 1065
    },
    {
      Name: "DIENER",
      Body: [
        {
          Type: "Text",
          Body: "Seine Exzellenz, der besonders wohlgeborene Graf von Almaviva, Herr über zweihundert Rinder und Mägde, Großcomptur von Kastilien und Katalonien, erster ",
          Line: 1072
        }
      ],
      Line: 1071
    },
    {
      Name: "",
      Body: [
        {
          Type: "Seite",
          Body: "20",
          Line: 1079
        }
      ],
      Line: 1079
    },
    {
      Name: "DIENER",
      Body: [
        {
          Type: "Text",
          Body: "Inquisitionsrat, Hauptaktionär einer Galgenfabrik, Träger und Käufer aller heiligen spanischen Orden, Vorsitzender der heiligen spanischen Liga für Heidenvertilgung, gefürsteter Graf von ... ",
          Line: 1083
        }
      ],
      Line: 1082
    },
    {
      Name: "GRAF",
      Body: [
        {
          Type: "Text",
          Body: "Das reicht. Ich bin inkognito hier. Susanne, ich bin gekommen, dir meine Gefühle persönlich zu äußern. Ich bin in der glücklichen Lage, über eine gewisse Leidenschaft für dich zu verfügen. Ich werde sie sofort äußern. Wo ist ein Stuhl? ",
          Line: 1090
        }
      ],
      Line: 1089
    },
    {
      Name: "SUSANNE",
      Body: [
        {
          Type: "Text",
          Body: "Halt, Herr Graf. Mit Verlaub, bleiben Sie stehen. ",
          Line: 1098
        }
      ],
      Line: 1097
    },
    {
      Name: "GRAF",
      Body: [
        {
          Type: "Text",
          Body: "Mit Verlaub, ich will mich setzen. ",
          Line: 1103
        }
      ],
      Line: 1102
    },
    {
      Name: "SUSANNE",
      Body: [
        {
          Type: "Text",
          Body: "Mit Verlaub, Herr Graf sehen im Stehen besonders vorteilhaft aus. ",
          Line: 1107
        }
      ],
      Line: 1106
    },
    {
      Name: "GRAF",
      Body: [
        {
          Type: "Text",
          Body: "Mit Verlaub, Herr Graf fühlen sich im Sitzen wohler. ",
          Line: 1111
        },
        {
          Type: "Regie",
          Body: "Der Graf setzt sich.",
          Line: 1112
        }
      ],
      Line: 1110
    },
    {
      Name: "",
      Body: [],
      Line: 1113
    },
    {
      Name: "CHERUBIN",
      Body: [
        {
          Type: "Regie",
          Body: "jault auf",
          Line: 1116
        }
      ],
      Line: 1115
    },
    {
      Name: "",
      Body: [],
      Line: 1117
    },
    {
      Name: "GRAF",
      Body: [
        {
          Type: "Text",
          Body: "Was jault hier? ",
          Line: 1120
        }
      ],
      Line: 1119
    },
    {
      Name: "SUSANNE",
      Body: [
        {
          Type: "Text",
          Body: "Es hat gejault? ",
          Line: 1124
        }
      ],
      Line: 1123
    },
    {
      Name: "Regie",
      Body: [
        {
          Type: "Text",
          Body: "Der Graf steht auf und läßt sich noch einmal in den Lehnstuhl fallen. Cherubin jault wieder auf. ",
          Line: 1128
        }
      ],
      Line: 1127
    },
    {
      Name: "GRAF",
      Body: [
        {
          Type: "Text",
          Body: "Es hat gejault! ",
          Line: 1133
        }
      ],
      Line: 1132
    },
    {
      Name: "SUSANNE",
      Body: [
        {
          Type: "Text",
          Body: "Es hat gequietscht. Der Sessel geht aus dem Leim. ",
          Line: 1137
        }
      ],
      Line: 1136
    },
    {
      Name: "Regie",
      Body: [
        {
          Type: "Text",
          Body: "Der Graf steht noch einmal auf und läßt sich in den Lehnstuhl fallen. Cherubin versucht ein Quietschen nachzuahmen. ",
          Line: 1141
        }
      ],
      Line: 1140
    },
    {
      Name: "GRAF",
      Body: [
        {
          Type: "Text",
          Body: "Es hat gequietscht, in der Tat. Man soll den Tischler benachrichtigen. Susanne, ich liebe dich. Bazillus hat dich bereits über meine Leidenschaft in Kenntnis gesetzt. Ich bin persönlich erschienen, um mit dir über die organisatorische Seite der Angelegenheit zu sprechen. Du kannst dich entspannen, mein Kind. ",
          Line: 1146
        }
      ],
      Line: 1145
    },
    {
      Name: "SUSANNE",
      Body: [
        {
          Type: "Regie",
          Body: "eindringlich",
          Line: 1155
        }
      ],
      Line: 1154
    },
    {
      Name: "",
      Body: [
        {
          Type: "Text",
          Body: "Herr Graf, ich heirate noch heute meinen Figaro. ",
          Line: 1155
        }
      ],
      Line: 1155
    },
    {
      Name: "GRAF",
      Body: [
        {
          Type: "Text",
          Body: "Das ist Punkt eins in meinem Plan. Er ist dann immer der Vater. ",
          Line: 1160
        }
      ],
      Line: 1159
    },
    {
      Name: "",
      Body: [
        {
          Type: "Seite",
          Body: "21",
          Line: 1166
        }
      ],
      Line: 1166
    },
    {
      Name: "SUSANNE",
      Body: [
        {
          Type: "Regie",
          Body: "eindringlich, ehrlich",
          Line: 1170
        }
      ],
      Line: 1169
    },
    {
      Name: "",
      Body: [
        {
          Type: "Text",
          Body: "Figaro ist Euch immer treu gewesen. ",
          Line: 1170
        }
      ],
      Line: 1170
    },
    {
      Name: "GRAF",
      Body: [
        {
          Type: "Text",
          Body: "Das ist Punkt zwei in meinem Plan. Seine Treue wird belohnt. Ich versetze ihn in den Außendienst und ernenne ihn zum ständigen Depeschenreiter. ",
          Line: 1175
        }
      ],
      Line: 1174
    },
    {
      Name: "SUSANNE",
      Body: [
        {
          Type: "Regie",
          Body: "flehentlich",
          Line: 1181
        }
      ],
      Line: 1180
    },
    {
      Name: "",
      Body: [
        {
          Type: "Text",
          Body: "Figaro hat euch viele gute Dienste erwiesen. ",
          Line: 1181
        }
      ],
      Line: 1181
    },
    {
      Name: "GRAF",
      Body: [
        {
          Type: "Text",
          Body: "Mit seiner Abwesenheit erweist er mir den besten, denn sie garantiert mir deine unbemannte Anwesenheit. Das ist übrigens Punkt drei in meinem Plan. ",
          Line: 1186
        }
      ],
      Line: 1185
    },
    {
      Name: "SUSANNE",
      Body: [
        {
          Type: "Regie",
          Body: "wieder spielerisch",
          Line: 1192
        }
      ],
      Line: 1191
    },
    {
      Name: "",
      Body: [
        {
          Type: "Text",
          Body: "Da wäre noch ein Punkt. ",
          Line: 1192
        }
      ],
      Line: 1192
    },
    {
      Name: "GRAF",
      Body: [
        {
          Type: "Text",
          Body: "Noch einer? Ich bezahle Bazillus dafür, daß er mir die besten Intrigen ausarbeitet. Hat der Kerl was vergessen? ",
          Line: 1196
        }
      ],
      Line: 1195
    },
    {
      Name: "SUSANNE",
      Body: [
        {
          Type: "Text",
          Body: "Das Wichtigste. Ich liebe Euch nicht. ",
          Line: 1201
        }
      ],
      Line: 1200
    },
    {
      Name: "GRAF",
      Body: [
        {
          Type: "Text",
          Body: "Das ändert die Sachlage. Bazillus! ",
          Line: 1205
        },
        {
          Type: "Regie",
          Body: "brüllt",
          Line: 1205
        }
      ],
      Line: 1204
    },
    {
      Name: "",
      Body: [
        {
          Type: "Text",
          Body: "Bazillus! ",
          Line: 1205
        }
      ],
      Line: 1205
    },
    {
      Name: "Regie",
      Body: [
        {
          Type: "Text",
          Body: "Bazillus, ein schäbiger Schurke, steigt unter der Decke, die die Möbel zudeckt, hervor. ",
          Line: 1209
        }
      ],
      Line: 1208
    },
    {
      Name: "GRAF",
      Body: [
        {
          Type: "Text",
          Body: "Bazillus, sie liebt mich nicht. Ich brauche eine neue Intrige. Sei fleißig, Schurkenkopf. ",
          Line: 1214
        }
      ],
      Line: 1213
    },
    {
      Name: "BAZILLUS",
      Body: [
        {
          Type: "Text",
          Body: "Sei fleißig, Schurkenkopf. Ich hab's. Sie liebt Euch nicht, aber sie liebt. Den alten Weibern sind die Schenkel vertrocknet, und ihre Grube ist voller Schlangen. Die aber ist jung und hat einen Schoß voll Feuer, den Euer Diener löschen soll. Schickt den Diener weg, und Ihr seid dran. Gelöscht muß werden. ",
          Line: 1219
        }
      ],
      Line: 1218
    },
    {
      Name: "SUSANNE",
      Body: [
        {
          Type: "Text",
          Body: "Der Herr wird sich verbrennen. ",
          Line: 1228
        }
      ],
      Line: 1227
    },
    {
      Name: "GRAF",
      Body: [
        {
          Type: "Text",
          Body: "Der Plan ist schlecht und schon dagewesen. Mach einen anderen. ",
          Line: 1232
        }
      ],
      Line: 1231
    },
    {
      Name: "BAZILLUS",
      Body: [
        {
          Type: "Text",
          Body: "Sei fleißig, Schurkenkopf. Ich hab's. Was man nicht stehlen kann, Herr Graf, kann man auch kaufen. Die Liebe zu Eurem Diener ist ihr sehr wertvoll. Gebt noch zwanzig Prozent drauf, und Ihr habt sie. ",
          Line: 1237
        }
      ],
      Line: 1236
    },
    {
      Name: "GRAF",
      Body: [
        {
          Type: "Text",
          Body: "Was bin ich schuldig, Susanne? ",
          Line: 1244
        }
      ],
      Line: 1243
    },
    {
      Name: "SUSANNE",
      Body: [
        {
          Type: "Text",
          Body: "Ihr wollt Euch meine Liebe erkaufen? Immerzu. Die erste Rate ist fällig. ",
          Line: 1248
        }
      ],
      Line: 1247
    },
    {
      Name: "",
      Body: [
        {
          Type: "Seite",
          Body: "22",
          Line: 1254
        }
      ],
      Line: 1254
    },
    {
      Name: "GRAF",
      Body: [
        {
          Type: "Text",
          Body: "Wieviel, mein Kind? ",
          Line: 1258
        }
      ],
      Line: 1257
    },
    {
      Name: "SUSANNE",
      Body: [
        {
          Type: "Text",
          Body: "Nicht viel, mein Herr. Ihr habt heute den Pagen Cherubin entlassen. Nehmt die Entlassung zurück. ",
          Line: 1262
        }
      ],
      Line: 1261
    },
    {
      Name: "GRAF",
      Body: [
        {
          Type: "Text",
          Body: "Was liegt dir an dem Kerl? ",
          Line: 1267
        }
      ],
      Line: 1266
    },
    {
      Name: "SUSANNE",
      Body: [
        {
          Type: "Text",
          Body: "Was liegt Euch an der Entlassung? ",
          Line: 1271
        }
      ],
      Line: 1270
    },
    {
      Name: "GRAF",
      Body: [
        {
          Type: "Text",
          Body: "Der Schmutzfink hat sich an Blanchette vergriffen. ",
          Line: 1275
        }
      ],
      Line: 1274
    },
    {
      Name: "SUSANNE",
      Body: [
        {
          Type: "Text",
          Body: "Was liegt Euch an Blanchette? ",
          Line: 1279
        }
      ],
      Line: 1278
    },
    {
      Name: "GRAF",
      Body: [
        {
          Type: "Text",
          Body: "He, Bazillus! Was liegt mir an Blanchette? ",
          Line: 1283
        }
      ],
      Line: 1282
    },
    {
      Name: "BAZILLUS",
      Body: [
        {
          Type: "Text",
          Body: "So viel liegt Euch an ihr, als Ihr auf ihr liegen wollt. ",
          Line: 1287
        }
      ],
      Line: 1286
    },
    {
      Name: "GRAF",
      Body: [
        {
          Type: "Text",
          Body: "Vortrefflich. Der Kerl ist wegen Besitzstörung entlassen. Ich habe ihn selbst ertappt. Erzähl die Geschichte, Bazillus. ",
          Line: 1292
        }
      ],
      Line: 1291
    },
    {
      Name: "BAZILLUS",
      Body: [
        {
          Type: "Regie",
          Body: "wirft sich in Pose",
          Line: 1298
        }
      ],
      Line: 1297
    },
    {
      Name: "",
      Body: [
        {
          Type: "Text",
          Body: "Unser heißgeliebter Graf Almaviva befindet sich auf Inspektionsreise. Im Zimmer von Blanchette findet er dieselbe in höchster Auflösung. Herr Graf schöpft einen hochwohlgeborenen Verdacht und hebt das Bettuch ... ",
          Line: 1298
        }
      ],
      Line: 1298
    },
    {
      Name: "BAZILLUS",
      Body: [
        {
          Type: "Regie",
          Body: "hebt das Tuch, welches die Seiten des Lehnstuhls verkleidet",
          Line: 1306
        }
      ],
      Line: 1305
    },
    {
      Name: "",
      Body: [
        {
          Type: "Text",
          Body: "... und plötzlich sieht er ... ",
          Line: 1307
        }
      ],
      Line: 1307
    },
    {
      Name: "Regie",
      Body: [
        {
          Type: "Text",
          Body: "Bazillus sieht Cherubin",
          Line: 1308
        }
      ],
      Line: 1308
    },
    {
      Name: "",
      Body: [
        {
          Type: "Text",
          Body: "... Oh! ",
          Line: 1308
        }
      ],
      Line: 1308
    },
    {
      Name: "SUSANNE",
      Body: [
        {
          Type: "Text",
          Body: "Oh! ",
          Line: 1312
        }
      ],
      Line: 1311
    },
    {
      Name: "BAZILLUS",
      Body: [
        {
          Type: "Text",
          Body: "Cherubin! ",
          Line: 1316
        }
      ],
      Line: 1315
    },
    {
      Name: "GRAF",
      Body: [
        {
          Type: "Text",
          Body: "Unterm Bett! ",
          Line: 1320
        }
      ],
      Line: 1319
    },
    {
      Name: "BAZILLUS",
      Body: [
        {
          Type: "Text",
          Body: "Unterm Lehnstuhl! ",
          Line: 1324
        }
      ],
      Line: 1323
    },
    {
      Name: "GRAF",
      Body: [
        {
          Type: "Regie",
          Body: "springt auf",
          Line: 1328
        }
      ],
      Line: 1327
    },
    {
      Name: "",
      Body: [
        {
          Type: "Text",
          Body: "Oh! ",
          Line: 1328
        }
      ],
      Line: 1328
    },
    {
      Name: "Regie",
      Body: [
        {
          Type: "Text",
          Body: "er sieht selbst nach",
          Line: 1328
        }
      ],
      Line: 1328
    },
    {
      Name: "",
      Body: [
        {
          Type: "Text",
          Body: "Gestern wie heute! Der Kerl wohnt unter meinen Möbeln! ",
          Line: 1328
        }
      ],
      Line: 1328
    },
    {
      Name: "CHERUBIN",
      Body: [
        {
          Type: "Text",
          Body: "Ein Zufall, Herr Graf! ",
          Line: 1333
        }
      ],
      Line: 1332
    },
    {
      Name: "SUSANNE",
      Body: [
        {
          Type: "Text",
          Body: "Ein Irrtum, Herr Graf! ",
          Line: 1337
        }
      ],
      Line: 1336
    },
    {
      Name: "GRAF",
      Body: [
        {
          Type: "Text",
          Body: "Eine Schande, Susanne! ",
          Line: 1341
        }
      ],
      Line: 1340
    },
    {
      Name: "BAZILLUS",
      Body: [
        {
          Type: "Text",
          Body: "Abscheulich! ",
          Line: 1345
        }
      ],
      Line: 1344
    },
    {
      Name: "GRAF",
      Body: [
        {
          Type: "Text",
          Body: "Greulich! ",
          Line: 1349
        }
      ],
      Line: 1348
    },
    {
      Name: "SUSANNE",
      Body: [
        {
          Type: "Text",
          Body: "Herr Graf, ein Irrtum ... ",
          Line: 1353
        }
      ],
      Line: 1352
    },
    {
      Name: "BAZILLUS",
      Body: [
        {
          Type: "Text",
          Body: "Greulich! ",
          Line: 1357
        }
      ],
      Line: 1356
    },
    {
      Name: "GRAF",
      Body: [
        {
          Type: "Text",
          Body: "Abscheulich! So kurz vor der Hochzeit, und schon ",
          Line: 1361
        }
      ],
      Line: 1360
    },
    {
      Name: "",
      Body: [
        {
          Type: "Seite",
          Body: "23",
          Line: 1366
        }
      ],
      Line: 1366
    },
    {
      Name: "GRAF",
      Body: [
        {
          Type: "Text",
          Body: "liegen die Liebhaber unter den Möbeln herum. Was für eine Sittenlosigkeit unter meiner Dienerschaft! Was für ein Verstoß gegen die Moral des Hauses. Der arme Figaro, den ich mehr als ein Reitpferd schätze ... es ist... ",
          Line: 1370
        }
      ],
      Line: 1369
    },
    {
      Name: "BAZILLUS",
      Body: [
        {
          Type: "Text",
          Body: "Abscheulich! ",
          Line: 1377
        }
      ],
      Line: 1376
    },
    {
      Name: "GRAF",
      Body: [
        {
          Type: "Text",
          Body: "Unterbrich mich nicht in meiner Erregung. Was wollte ich soeben zornig bemerken? ",
          Line: 1381
        }
      ],
      Line: 1380
    },
    {
      Name: "BAZILLUS",
      Body: [
        {
          Type: "Text",
          Body: "Dem Pferd sind Hörner aufgesetzt, so wolltet Ihr eben trefflich bemerken. ",
          Line: 1386
        }
      ],
      Line: 1385
    },
    {
      Name: "GRAF",
      Body: [
        {
          Type: "Text",
          Body: "Ein Pferd mit Hörnern? ",
          Line: 1391
        }
      ],
      Line: 1390
    },
    {
      Name: "BAZILLUS",
      Body: [
        {
          Type: "Text",
          Body: "... der betrogene Figaro. ",
          Line: 1395
        }
      ],
      Line: 1394
    },
    {
      Name: "GRAF",
      Body: [
        {
          Type: "Text",
          Body: "Der arme Esel. ",
          Line: 1399
        }
      ],
      Line: 1398
    },
    {
      Name: "SUSANNE",
      Body: [
        {
          Type: "Text",
          Body: "Weder Pferd noch Esel. Herr Graf, Figaro ist nicht betrogen, und Cherubin ist ... ",
          Line: 1403
        }
      ],
      Line: 1402
    },
    {
      Name: "CHERUBIN",
      Body: [
        {
          Type: "Text",
          Body: "Ein unschuldiger Mensch. ",
          Line: 1408
        }
      ],
      Line: 1407
    },
    {
      Name: "GRAF",
      Body: [
        {
          Type: "Text",
          Body: "So wie gestern. Der Kerl sammelt die Unschuld. ",
          Line: 1412
        }
      ],
      Line: 1411
    },
    {
      Name: "SUSANNE",
      Body: [
        {
          Type: "Text",
          Body: "Eben wegen dieses »Gestern« kam er heute zu mir. Nachdem Ihr ihn bei Blanchette erwischt hattet, habt Ihr ihn entlassen. Bevor Ihr ihn bei mir gefunden habt, bat er mich, Euch zu bitten, ihn nicht zu entlassen. ",
          Line: 1416
        }
      ],
      Line: 1415
    },
    {
      Name: "GRAF",
      Body: [
        {
          Type: "Text",
          Body: "Und diese Bitte trug er dir unter dem Lehnstuhl vor? ",
          Line: 1423
        }
      ],
      Line: 1422
    },
    {
      Name: "BAZILLUS",
      Body: [
        {
          Type: "Text",
          Body: "Greulich! ",
          Line: 1427
        }
      ],
      Line: 1426
    },
    {
      Name: "GRAF",
      Body: [
        {
          Type: "Text",
          Body: "Genug. Dieses Bordell muß ein anderes werden. ",
          Line: 1431
        },
        {
          Type: "Regie",
          Body: "In Pose",
          Line: 1432
        }
      ],
      Line: 1430
    },
    {
      Name: "",
      Body: [
        {
          Type: "Text",
          Body: "Ich verfüge ... ",
          Line: 1432
        }
      ],
      Line: 1432
    },
    {
      Name: "DIENER",
      Body: [
        {
          Type: "Regie",
          Body: "klopft mit dem Stock dreimal auf den Boden",
          Line: 1436
        }
      ],
      Line: 1435
    },
    {
      Name: "",
      Body: [
        {
          Type: "Text",
          Body: "Es verfügt der wohlgeborene Graf von Almaviva, Herr über ... ",
          Line: 1436
        }
      ],
      Line: 1436
    },
    {
      Name: "GRAF",
      Body: [
        {
          Type: "Regie",
          Body: "unterbricht ihn",
          Line: 1441
        }
      ],
      Line: 1440
    },
    {
      Name: "",
      Body: [
        {
          Type: "Text",
          Body: "Schweig er! Das Zeremoniell reißt mich ganz aus dem Zorn. ",
          Line: 1441
        }
      ],
      Line: 1441
    },
    {
      Name: "Regie",
      Body: [
        {
          Type: "Text",
          Body: "zu Susanne",
          Line: 1442
        }
      ],
      Line: 1442
    },
    {
      Name: "",
      Body: [
        {
          Type: "Text",
          Body: "Ich freue mich darauf, Figaro von deinen abscheulichen Taten zu unterrichten. ",
          Line: 1442
        }
      ],
      Line: 1442
    },
    {
      Name: "SUSANNE",
      Body: [
        {
          Type: "Regie",
          Body: "mutig",
          Line: 1448
        }
      ],
      Line: 1447
    },
    {
      Name: "",
      Body: [
        {
          Type: "Text",
          Body: "Und ich freue mich darauf, der Frau Gräfin von Euren abscheulichen Absichten zu erzählen. Geteilte Freud ist halbes Leid, wenn ich zusätzlich bemerken darf. ",
          Line: 1448
        }
      ],
      Line: 1448
    },
    {
      Name: "",
      Body: [
        {
          Type: "Seite",
          Body: "24",
          Line: 1456
        }
      ],
      Line: 1456
    },
    {
      Name: "GRAF",
      Body: [
        {
          Type: "Text",
          Body: "Heilige Madonna in Unterhosen! Das ist... ",
          Line: 1460
        }
      ],
      Line: 1459
    },
    {
      Name: "BAZILLUS",
      Body: [
        {
          Type: "Text",
          Body: "Greulich ... ",
          Line: 1464
        }
      ],
      Line: 1463
    },
    {
      Name: "GRAF",
      Body: [
        {
          Type: "Text",
          Body: "Eine Erpressung!!! ",
          Line: 1468
        }
      ],
      Line: 1467
    },
    {
      Name: "BAZILLUS",
      Body: [
        {
          Type: "Text",
          Body: "Abscheulich. Das Personal wird immer frecher. ",
          Line: 1472
        }
      ],
      Line: 1471
    },
    {
      Name: "GRAF",
      Body: [
        {
          Type: "Text",
          Body: "Bazillus. Los, los, eine neue Intrige. ",
          Line: 1476
        }
      ],
      Line: 1475
    },
    {
      Name: "Regie",
      Body: [
        {
          Type: "Text",
          Body: "Es klopft. ",
          Line: 1480
        }
      ],
      Line: 1479
    },
    {
      Name: "BAZILLUS",
      Body: [
        {
          Type: "Text",
          Body: "Es klopft! ",
          Line: 1484
        }
      ],
      Line: 1483
    },
    {
      Name: "GRAF",
      Body: [
        {
          Type: "Text",
          Body: "Dann öffne! ",
          Line: 1488
        }
      ],
      Line: 1487
    },
    {
      Name: "BAZILLUS",
      Body: [
        {
          Type: "Text",
          Body: "Ich eile! ",
          Line: 1492
        }
      ],
      Line: 1491
    },
    {
      Name: "GRAF",
      Body: [
        {
          Type: "Text",
          Body: "Halt! Zuerst eine Intrige, vorwärts!! ",
          Line: 1496
        }
      ],
      Line: 1495
    },
    {
      Name: "Regie",
      Body: [
        {
          Type: "Text",
          Body: "Es klopft stärker. ",
          Line: 1500
        }
      ],
      Line: 1499
    },
    {
      Name: "BAZILLUS",
      Body: [
        {
          Type: "Text",
          Body: "Es klopft noch immer. Ich eile wieder. ",
          Line: 1504
        }
      ],
      Line: 1503
    },
    {
      Name: "GRAF",
      Body: [
        {
          Type: "Text",
          Body: "Halt! Die Intrige, schnell! ",
          Line: 1508
        }
      ],
      Line: 1507
    },
    {
      Name: "BAZILLUS",
      Body: [
        {
          Type: "Text",
          Body: "Eine Intrige zwischen Tür und Angel? O Gott! Greulich! ",
          Line: 1512
        }
      ],
      Line: 1511
    },
    {
      Name: "Regie",
      Body: [
        {
          Type: "Text",
          Body: "Die Tür öffnet sich. Die Gräfin und Figaro auf. ",
          Line: 1516
        }
      ],
      Line: 1515
    },
    {
      Name: "GRAF",
      Body: [
        {
          Type: "Text",
          Body: "Abscheulich. Der Auftritt paßt mir wenig. ",
          Line: 1520
        }
      ],
      Line: 1519
    },
    {
      Name: "FIGARO",
      Body: [
        {
          Type: "Regie",
          Body: "zum Grafen, mit tiefster Verbeugung",
          Line: 1524
        }
      ],
      Line: 1523
    },
    {
      Name: "",
      Body: [
        {
          Type: "Text",
          Body: "O glückliche Dienerschaft, die Euch, Herr Graf, zum Herren weiß. ",
          Line: 1524
        }
      ],
      Line: 1524
    },
    {
      Name: "DIENER",
      Body: [
        {
          Type: "Regie",
          Body: "klopft mit dem Stock",
          Line: 1529
        }
      ],
      Line: 1528
    },
    {
      Name: "",
      Body: [
        {
          Type: "Text",
          Body: "Seine Exzellenz, der besonders wohlgeborene Graf von Almaviva ... ",
          Line: 1529
        }
      ],
      Line: 1529
    },
    {
      Name: "FIGARO",
      Body: [
        {
          Type: "Text",
          Body: "Retter der Jungfernschaft! ",
          Line: 1534
        }
      ],
      Line: 1533
    },
    {
      Name: "DIENER",
      Body: [
        {
          Type: "Text",
          Body: "Herr über zweihundert Rinder und Mägde ... ",
          Line: 1538
        }
      ],
      Line: 1537
    },
    {
      Name: "FIGARO",
      Body: [
        {
          Type: "Text",
          Body: "Hüter der Unschuld! ",
          Line: 1542
        }
      ],
      Line: 1541
    },
    {
      Name: "DIENER",
      Body: [
        {
          Type: "Text",
          Body: "Erster Inquisitionsrat... ",
          Line: 1546
        }
      ],
      Line: 1545
    },
    {
      Name: "FIGARO",
      Body: [
        {
          Type: "Text",
          Body: "Meister der Tugend! ",
          Line: 1550
        }
      ],
      Line: 1549
    },
    {
      Name: "DIENER",
      Body: [
        {
          Type: "Text",
          Body: "Hauptaktionär einer Galgenfabrik ... ",
          Line: 1554
        }
      ],
      Line: 1553
    },
    {
      Name: "FIGARO",
      Body: [
        {
          Type: "Regie",
          Body: "zu Susanne",
          Line: 1558
        }
      ],
      Line: 1557
    },
    {
      Name: "",
      Body: [
        {
          Type: "Text",
          Body: "Mach mit, mein Herz, gleich zappelt der Bock an der Angel! ",
          Line: 1558
        }
      ],
      Line: 1558
    },
    {
      Name: "GRAF",
      Body: [
        {
          Type: "Text",
          Body: "Was gibt's da zu flüstern, Figaro? ",
          Line: 1563
        }
      ],
      Line: 1562
    },
    {
      Name: "FIGARO",
      Body: [
        {
          Type: "Text",
          Body: "Verzeiht, Herr Graf. Die Lobpreisung für Eure Person hat mir die Zunge verschlagen. Ich bin ganz heiser. ",
          Line: 1567
        },
        {
          Type: "Regie",
          Body: "Mit krächzender Stimme",
          Line: 1569
        }
      ],
      Line: 1566
    },
    {
      Name: "",
      Body: [
        {
          Type: "Text",
          Body: "Retter der Jungfernschaft! Hüter der Unschuld! Meister der Tugend! ",
          Line: 1569
        }
      ],
      Line: 1569
    },
    {
      Name: "SUSANNE",
      Body: [
        {
          Type: "Regie",
          Body: "flüsternd zu Figaro",
          Line: 1574
        }
      ],
      Line: 1573
    },
    {
      Name: "",
      Body: [
        {
          Type: "Text",
          Body: "Treibe es nicht zu weit, mein kühner Figaro. ",
          Line: 1574
        }
      ],
      Line: 1574
    },
    {
      Name: "",
      Body: [
        {
          Type: "Seite",
          Body: "25",
          Line: 1580
        }
      ],
      Line: 1580
    },
    {
      Name: "GRAF",
      Body: [
        {
          Type: "Text",
          Body: "Was gibt's da zu flüstern, Susanne? ",
          Line: 1584
        }
      ],
      Line: 1583
    },
    {
      Name: "SUSANNE",
      Body: [
        {
          Type: "Regie",
          Body: "heiser",
          Line: 1588
        }
      ],
      Line: 1587
    },
    {
      Name: "",
      Body: [
        {
          Type: "Text",
          Body: "Ich teile nur die Verehrung meines Bräutigams für Eure Person. ",
          Line: 1588
        }
      ],
      Line: 1588
    },
    {
      Name: "GRAF",
      Body: [
        {
          Type: "Text",
          Body: "Dieser Ausbruch einer allgemeinen Heiserkeit... ",
          Line: 1593
        }
      ],
      Line: 1592
    },
    {
      Name: "GREFIN",
      Body: [
        {
          Type: "Text",
          Body: "... ist doch nur der Ausdruck tiefster Rührung. Die guten Leute haben eine Bitte, die ich tiefbegründet finde. Sie sind tief gerührt von Ihrer Art, die Tugend zu belohnen und die Unschuld zu schützen. ",
          Line: 1597
        }
      ],
      Line: 1596
    },
    {
      Name: "SUSANNE",
      Body: [
        {
          Type: "Text",
          Body: "Zutiefst! ",
          Line: 1604
        }
      ],
      Line: 1603
    },
    {
      Name: "GREFIN",
      Body: [
        {
          Type: "Text",
          Body: "Seit Sie mir zuliebe dieses Vorrecht der ersten Nacht abgeschafft haben, sind Sie das Ziel höchster Bewunderung geworden. ",
          Line: 1608
        }
      ],
      Line: 1607
    },
    {
      Name: "FIGARO",
      Body: [
        {
          Type: "Text",
          Body: "Zutiefst! ",
          Line: 1613
        }
      ],
      Line: 1612
    },
    {
      Name: "SUSANNE",
      Body: [
        {
          Type: "Text",
          Body: "Zuhöchst! ",
          Line: 1617
        }
      ],
      Line: 1616
    },
    {
      Name: "GRAF",
      Body: [
        {
          Type: "Text",
          Body: "Ich dieses Vorrecht abgeschafft ... ich habe dieses Vorrecht durch Abschaffung ... ",
          Line: 1621
        }
      ],
      Line: 1620
    },
    {
      Name: "BAZILLUS",
      Body: [
        {
          Type: "Regie",
          Body: "reicht dem Grafen einen Zettel",
          Line: 1626
        }
      ],
      Line: 1625
    },
    {
      Name: "",
      Body: [],
      Line: 1627
    },
    {
      Name: "GRAF",
      Body: [
        {
          Type: "Regie",
          Body: "liest",
          Line: 1630
        }
      ],
      Line: 1629
    },
    {
      Name: "",
      Body: [
        {
          Type: "Text",
          Body: "... abgeschafft, um den sklavischen Tribut der Gewalt durch die süße Pflicht der Hingabe zu ersetzen! ",
          Line: 1630
        }
      ],
      Line: 1630
    },
    {
      Name: "FIGARO",
      Body: [
        {
          Type: "Text",
          Body: "Ein Triumph der Tugend! Vivat! ",
          Line: 1635
        }
      ],
      Line: 1634
    },
    {
      Name: "DIENER",
      Body: [
        {
          Type: "Text",
          Body: "Vivat! Die Tugend unseres Herrn! ",
          Line: 1639
        }
      ],
      Line: 1638
    },
    {
      Name: "GRAF",
      Body: [
        {
          Type: "Text",
          Body: "Es freut mich, daß meine Einstellung zu Fragen der Sitte und Moral so einstimmig gewürdigt wird. ",
          Line: 1643
        },
        {
          Type: "Regie",
          Body: "Brüllt",
          Line: 1644
        }
      ],
      Line: 1642
    },
    {
      Name: "",
      Body: [
        {
          Type: "Text",
          Body: "Aber warum ausgerechnet jetzt und so heftig? He? ",
          Line: 1645
        }
      ],
      Line: 1645
    },
    {
      Name: "BAZILLUS",
      Body: [
        {
          Type: "Regie",
          Body: "reicht dem Grafen einen Zettel",
          Line: 1649
        }
      ],
      Line: 1648
    },
    {
      Name: "",
      Body: [],
      Line: 1650
    },
    {
      Name: "GRAF",
      Body: [
        {
          Type: "Regie",
          Body: "liest, vornehm",
          Line: 1653
        }
      ],
      Line: 1652
    },
    {
      Name: "",
      Body: [
        {
          Type: "Text",
          Body: "Was überkam Euch? ",
          Line: 1653
        }
      ],
      Line: 1653
    },
    {
      Name: "GREFIN",
      Body: [
        {
          Type: "Text",
          Body: "Graf Almaviva, durch Ihre weise Entscheidung wurde dieses Geschöpf ",
          Line: 1657
        },
        {
          Type: "Regie",
          Body: "wendet sich zu Susanne",
          Line: 1658
        }
      ],
      Line: 1656
    },
    {
      Name: "",
      Body: [
        {
          Type: "Text",
          Body: "vor Schande bewahrt. ",
          Line: 1658
        }
      ],
      Line: 1658
    },
    {
      Name: "SUSANNE",
      Body: [
        {
          Type: "Regie",
          Body: "verbeugt sich vor dem Grafen",
          Line: 1663
        }
      ],
      Line: 1662
    },
    {
      Name: "",
      Body: [
        {
          Type: "Text",
          Body: "Durch ihn bewahrt! ",
          Line: 1663
        }
      ],
      Line: 1663
    },
    {
      Name: "Regie",
      Body: [
        {
          Type: "Text",
          Body: "wendet sich zu Figaro",
          Line: 1664
        }
      ],
      Line: 1664
    },
    {
      Name: "",
      Body: [
        {
          Type: "Text",
          Body: "Für ihn bewahrt! ",
          Line: 1664
        }
      ],
      Line: 1664
    },
    {
      Name: "DIENER",
      Body: [
        {
          Type: "Text",
          Body: "Vivat! Die Tugend unseres Herrn! ",
          Line: 1668
        }
      ],
      Line: 1667
    },
    {
      Name: "GREFIN",
      Body: [
        {
          Type: "Text",
          Body: "Durch Ihre sittenreiche Haltung wird dieses Mädchen seine Hochzeitsnacht mit dem Herrn ihres Herzens und nicht mit dem des Hauses verbringen. Kein Tribut der Gewalt, nur die süße Pflicht der Hingabe. ",
          Line: 1672
        }
      ],
      Line: 1671
    },
    {
      Name: "",
      Body: [
        {
          Type: "Seite",
          Body: "26",
          Line: 1680
        }
      ],
      Line: 1680
    },
    {
      Name: "DIENER",
      Body: [
        {
          Type: "Text",
          Body: "Ein Triumph der Tugend! Vivat! ",
          Line: 1684
        }
      ],
      Line: 1683
    },
    {
      Name: "GRAF",
      Body: [
        {
          Type: "Regie",
          Body: "laut",
          Line: 1688
        }
      ],
      Line: 1687
    },
    {
      Name: "",
      Body: [
        {
          Type: "Text",
          Body: "Halt, sage ich, aus der Hochzeit der beiden wird ... ",
          Line: 1688
        }
      ],
      Line: 1688
    },
    {
      Name: "GREFIN",
      Body: [
        {
          Type: "Text",
          Body: "Ein würdiges Fest, wenn Sie, mein Gemahl, die Bitte dieser Leutchen erfüllen und der tugendsamen Braut den Schleier aufs jungfräuliche Haupt legen. Wie gut würde diese Handlung zu Ihrer reinen Gesinnung passen. ",
          Line: 1692
        }
      ],
      Line: 1691
    },
    {
      Name: "FIGARO",
      Body: [
        {
          Type: "Regie",
          Body: "reicht dem Grafen den Schleier",
          Line: 1700
        }
      ],
      Line: 1699
    },
    {
      Name: "",
      Body: [],
      Line: 1701
    },
    {
      Name: "DIENER",
      Body: [
        {
          Type: "Text",
          Body: "Vivat! Die Reinheit unseres Herrn! ",
          Line: 1704
        }
      ],
      Line: 1703
    },
    {
      Name: "SUSANNE",
      Body: [
        {
          Type: "Text",
          Body: "Könnt Ihr Euch, Herr Graf, einem Lobe entziehen, das Euch mehr als allen anderen gebührt? Euch, der Ihr so fleißig an die Tugend Eurer Mägde denkt... ",
          Line: 1708
        }
      ],
      Line: 1707
    },
    {
      Name: "GRAF",
      Body: [
        {
          Type: "Text",
          Body: "Bei allen Puffmüttern des Himmels, was mach' ich nur?! ",
          Line: 1714
        }
      ],
      Line: 1713
    },
    {
      Name: "FIGARO",
      Body: [
        {
          Type: "Text",
          Body: "Seht sie Euch an, Herr Graf. Macht nicht die Schönheit dieses Mädchens Eure Geste doppelt wertvoll? ",
          Line: 1718
        }
      ],
      Line: 1717
    },
    {
      Name: "SUSANNE",
      Body: [
        {
          Type: "Text",
          Body: "Nicht von Äußerlichkeiten ist jetzt die Rede, sondern von den inneren Werten des Herrn Grafen. ",
          Line: 1723
        }
      ],
      Line: 1722
    },
    {
      Name: "DIENER",
      Body: [
        {
          Type: "Text",
          Body: "Vivat! Die Tugend unseres Herrn! ",
          Line: 1728
        }
      ],
      Line: 1727
    },
    {
      Name: "GRAF",
      Body: [
        {
          Type: "Text",
          Body: "Bazillus, schnell, eine blitzartige Intrige. ",
          Line: 1732
        }
      ],
      Line: 1731
    },
    {
      Name: "BAZILLUS",
      Body: [
        {
          Type: "Regie",
          Body: "reicht dem Grafen einen Zettel",
          Line: 1736
        }
      ],
      Line: 1735
    },
    {
      Name: "",
      Body: [],
      Line: 1737
    },
    {
      Name: "GRAF",
      Body: [
        {
          Type: "Regie",
          Body: "liest laut",
          Line: 1740
        }
      ],
      Line: 1739
    },
    {
      Name: "",
      Body: [
        {
          Type: "Text",
          Body: "Zeit gewinnen! Oh! ",
          Line: 1740
        }
      ],
      Line: 1740
    },
    {
      Name: "GREFIN",
      Body: [
        {
          Type: "Text",
          Body: "Was sagen Sie? ",
          Line: 1744
        }
      ],
      Line: 1743
    },
    {
      Name: "GRAF",
      Body: [
        {
          Type: "Regie",
          Body: "verlegen",
          Line: 1748
        }
      ],
      Line: 1747
    },
    {
      Name: "",
      Body: [
        {
          Type: "Text",
          Body: "Die Zeit, die Zeit sie geht so schnell von hinnen ... ",
          Line: 1748
        }
      ],
      Line: 1748
    },
    {
      Name: "GREFIN",
      Body: [
        {
          Type: "Text",
          Body: "Drum Ordnung lehrt euch Zeit gewinnen. Überreichen Sie der Braut den Schleier, damit die Hochzeit ihren Lauf nehmen kann. Besiegeln Sie den Bund. ",
          Line: 1752
        }
      ],
      Line: 1751
    },
    {
      Name: "FIGARO",
      Body: [
        {
          Type: "Regie",
          Body: "Figaro drängt dem Grafen den Schleier auf.",
          Line: 1758
        }
      ],
      Line: 1757
    },
    {
      Name: "",
      Body: [],
      Line: 1759
    },
    {
      Name: "GRAF",
      Body: [
        {
          Type: "Text",
          Body: "Ich besiegle ... ",
          Line: 1762
        }
      ],
      Line: 1761
    },
    {
      Name: "BAZILLUS",
      Body: [
        {
          Type: "Regie",
          Body: "flüstert",
          Line: 1766
        }
      ],
      Line: 1765
    },
    {
      Name: "",
      Body: [
        {
          Type: "Text",
          Body: "Zeit gewinnen! ",
          Line: 1766
        }
      ],
      Line: 1766
    },
    {
      Name: "GRAF",
      Body: [
        {
          Type: "Text",
          Body: "Etwas später. ",
          Line: 1770
        }
      ],
      Line: 1769
    },
    {
      Name: "GREFIN",
      Body: [
        {
          Type: "Text",
          Body: "Ihr Wort genügt. ",
          Line: 1774
        }
      ],
      Line: 1773
    },
    {
      Name: "",
      Body: [
        {
          Type: "Seite",
          Body: "27",
          Line: 1779
        }
      ],
      Line: 1779
    },
    {
      Name: "GRAF",
      Body: [
        {
          Type: "Text",
          Body: "Hier ist nicht der richtige Ort für eine so feierliche Zeremonie. Auf! Auf! Das Gesinde soll sich putzen und die Räume schmücken. Dies ist kein gewöhnlicher Tag, vereint er doch zwei Liebende zu einem Bunde ... ",
          Line: 1783
        }
      ],
      Line: 1782
    },
    {
      Name: "BAZILLUS",
      Body: [
        {
          Type: "Regie",
          Body: "flüstert",
          Line: 1790
        }
      ],
      Line: 1789
    },
    {
      Name: "",
      Body: [
        {
          Type: "Text",
          Body: "Zeit gewinnen! ",
          Line: 1790
        }
      ],
      Line: 1790
    },
    {
      Name: "GRAF",
      Body: [
        {
          Type: "Text",
          Body: "... zum ewigen Bunde ... ",
          Line: 1794
        }
      ],
      Line: 1793
    },
    {
      Name: "BAZILLUS",
      Body: [
        {
          Type: "Regie",
          Body: "flüstert",
          Line: 1798
        }
      ],
      Line: 1797
    },
    {
      Name: "",
      Body: [
        {
          Type: "Text",
          Body: "Zeit gewinnen! ",
          Line: 1798
        }
      ],
      Line: 1798
    },
    {
      Name: "GRAF",
      Body: [
        {
          Type: "Text",
          Body: "... bis in alle Ewigkeit... ",
          Line: 1802
        }
      ],
      Line: 1801
    },
    {
      Name: "DIENER",
      Body: [
        {
          Type: "Text",
          Body: "Amen! ",
          Line: 1806
        }
      ],
      Line: 1805
    },
    {
      Name: "GRAF",
      Body: [
        {
          Type: "Regie",
          Body: "zu Bazillus",
          Line: 1810
        }
      ],
      Line: 1809
    },
    {
      Name: "",
      Body: [
        {
          Type: "Text",
          Body: "Jetzt geht es hart auf heiß. Ich brauche eine erstklassige ... ",
          Line: 1810
        }
      ],
      Line: 1810
    },
    {
      Name: "BAZILLUS",
      Body: [
        {
          Type: "Text",
          Body: "Ich weiß. Prompte Lieferung. Ich eile. ",
          Line: 1815
        }
      ],
      Line: 1814
    },
    {
      Name: "Regie",
      Body: [
        {
          Type: "Text",
          Body: "Bazillus ab. Graf und Gräfin ab. ",
          Line: 1819
        }
      ],
      Line: 1818
    },
    {
      Name: "FIGARO",
      Body: [
        {
          Type: "Regie",
          Body: "zu Susanne",
          Line: 1823
        }
      ],
      Line: 1822
    },
    {
      Name: "",
      Body: [
        {
          Type: "Text",
          Body: "Na, mein Täubchen, wie haben wir das gedreht? ",
          Line: 1823
        }
      ],
      Line: 1823
    },
    {
      Name: "SUSANNE",
      Body: [
        {
          Type: "Text",
          Body: "Wenn du die Ehe auch so klug betreibst wie unsere Hochzeit, sehe ich rosa für die Zukunft. ",
          Line: 1827
        }
      ],
      Line: 1826
    },
    {
      Name: "FIGARO",
      Body: [
        {
          Type: "Text",
          Body: "Wenn ich an die Zukunft mit dir denke, sehe ich alle Farben. ",
          Line: 1832
        }
      ],
      Line: 1831
    },
    {
      Name: "Regie",
      Body: [
        {
          Type: "Text",
          Body: "Figaro und Susanne ab. Cherubin kommt hinterm Lehnstuhl hervor. ",
          Line: 1836
        }
      ],
      Line: 1835
    },
    {
      Name: "CHERUBIN",
      Body: [
        {
          Type: "Text",
          Body: "O heilige Mutter Gottes! Gesegnet sei dein jungfräulicher Busen! Mich hat der Graf vergessen. Was für eine Wohltat für mein unschuldiges Gemüt. ",
          Line: 1841
        }
      ],
      Line: 1840
    },
    {
      Name: "DIENER",
      Body: [
        {
          Type: "Regie",
          Body: "von draußen, seine Stimme kommt näher",
          Line: 1847
        }
      ],
      Line: 1846
    },
    {
      Name: "",
      Body: [
        {
          Type: "Text",
          Body: "Seine Exzellenz, der besonders wohlgeborene Graf von Almaviva, Herr über zweihundert Rinder und Mägde, Großcomptur von Kastilien und Katalonien, erster Inquisitionsrat, Hauptaktionär einer Galgenfabrik ... ",
          Line: 1847
        }
      ],
      Line: 1847
    },
    {
      Name: "CHERUBIN",
      Body: [
        {
          Type: "Regie",
          Body: "verschwindet blitzschnell hinterm Lehnstuhl.",
          Line: 1855
        }
      ],
      Line: 1854
    },
    {
      Name: "",
      Body: [],
      Line: 1856
    },
    {
      Name: "Regie",
      Body: [
        {
          Type: "Text",
          Body: "Graf und Diener auf. ",
          Line: 1859
        }
      ],
      Line: 1858
    },
    {
      Name: "GRAF",
      Body: [
        {
          Type: "Text",
          Body: "Scheiße in aeternam! Verfluchtes Gesindel! Va nella figa della butana che te ha gagata. Endlich kann ich mich ausfluchen! Nicht genug, daß sie mein Brot fressen, meine Teppiche zertrampeln, jetzt bringt man mich auch ",
          Line: 1863
        }
      ],
      Line: 1862
    },
    {
      Name: "",
      Body: [
        {
          Type: "Seite",
          Body: "28",
          Line: 1871
        }
      ],
      Line: 1871
    },
    {
      Name: "GRAF",
      Body: [
        {
          Type: "Text",
          Body: "noch um mein Vergnügen. Diese Hochzeit wird verhindert. Jawohl, ich lasse verhindern. ",
          Line: 1875
        },
        {
          Type: "Regie",
          Body: "zum Diener",
          Line: 1876
        }
      ],
      Line: 1874
    },
    {
      Name: "",
      Body: [
        {
          Type: "Text",
          Body: "He, du, wirf den Lehnstuhl um. Ich brauche ein sichtbares Zeichen meiner Erregung! ",
          Line: 1877
        }
      ],
      Line: 1877
    },
    {
      Name: "Regie",
      Body: [
        {
          Type: "Text",
          Body: "Der Diener wirft den Lehnstuhl um. Cherubin kommt zum Vorschein. ",
          Line: 1882
        }
      ],
      Line: 1881
    },
    {
      Name: "GRAF",
      Body: [
        {
          Type: "Text",
          Body: "Cherubin? Schon wieder?! ",
          Line: 1887
        }
      ],
      Line: 1886
    },
    {
      Name: "CHERUBIN",
      Body: [
        {
          Type: "Text",
          Body: "Es, es hat nichts zu bedeuten. ",
          Line: 1891
        }
      ],
      Line: 1890
    },
    {
      Name: "GRAF",
      Body: [
        {
          Type: "Text",
          Body: "Zum drittenmal! Ich werde wahnsinnig! ",
          Line: 1895
        }
      ],
      Line: 1894
    },
    {
      Name: "CHERUBIN",
      Body: [
        {
          Type: "Text",
          Body: "Eine ... dumme Gewohnheit, Herr Graf ... ",
          Line: 1899
        }
      ],
      Line: 1898
    },
    {
      Name: "GRAF",
      Body: [
        {
          Type: "Text",
          Body: "Ich lasse dich auspeitschen! ",
          Line: 1903
        }
      ],
      Line: 1902
    },
    {
      Name: "",
      Body: [
        {
          Type: "TextTeilEnde",
          Body: "TextTeilAnfang",
          Line: 1906
        },
        {
          Type: "TextTeilAnfang",
          Body: "begin",
          Line: 1907
        }
      ],
      Line: 1906
    },
    {
      Name: "CHERUBIN",
      Body: [
        {
          Type: "Text",
          Body: "Als ich das letztemal unter diesem Lehnstuhl... ",
          Line: 1910
        }
      ],
      Line: 1909
    },
    {
      Name: "GRAF",
      Body: [
        {
          Type: "Text",
          Body: "Ich hetze dir die Hunde nach! ",
          Line: 1914
        }
      ],
      Line: 1913
    },
    {
      Name: "CHERUBIN",
      Body: [
        {
          Type: "Text",
          Body: "... Euch mit Susanne sprechen hörte ... ",
          Line: 1918
        }
      ],
      Line: 1917
    },
    {
      Name: "GRAF",
      Body: [
        {
          Type: "Text",
          Body: "Ich entlasse dich! ",
          Line: 1922
        }
      ],
      Line: 1921
    },
    {
      Name: "CHERUBIN",
      Body: [
        {
          Type: "Text",
          Body: "... über ein gewisses Thema ... ",
          Line: 1926
        }
      ],
      Line: 1925
    },
    {
      Name: "GRAF",
      Body: [
        {
          Type: "Text",
          Body: "Ich versetze dich! ",
          Line: 1930
        }
      ],
      Line: 1929
    },
    {
      Name: "CHERUBIN",
      Body: [
        {
          Type: "Text",
          Body: "... welches die Frau Gräfin ... ",
          Line: 1934
        }
      ],
      Line: 1933
    },
    {
      Name: "GRAF",
      Body: [
        {
          Type: "Text",
          Body: "Zu meinem Regiment... ",
          Line: 1938
        }
      ],
      Line: 1937
    },
    {
      Name: "CHERUBIN",
      Body: [
        {
          Type: "Text",
          Body: "... nie erfahren wird! ",
          Line: 1942
        }
      ],
      Line: 1941
    },
    {
      Name: "GRAF",
      Body: [
        {
          Type: "Text",
          Body: "... als Leutnant! Du reist noch heute ab. Mein letztes Wort. ",
          Line: 1946
        },
        {
          Type: "Regie",
          Body: "wendet sich zum Gehen",
          Line: 1947
        }
      ],
      Line: 1945
    },
    {
      Name: "",
      Body: [
        {
          Type: "Text",
          Body: "Ein widerliches Pack! Scheiße in aeternam! ",
          Line: 1947
        }
      ],
      Line: 1947
    },
    {
      Name: "DIENER",
      Body: [
        {
          Type: "Text",
          Body: "Seine Exzellenz der ... ",
          Line: 1952
        }
      ],
      Line: 1951
    },
    {
      Name: "GRAF",
      Body: [
        {
          Type: "Text",
          Body: "Halt's Maul! ",
          Line: 1956
        }
      ],
      Line: 1955
    },
    {
      Name: "Regie",
      Body: [
        {
          Type: "Text",
          Body: "Graf und Diener ab. ",
          Line: 1960
        }
      ],
      Line: 1959
    },
    {
      Name: "CHERUBIN",
      Body: [
        {
          Type: "Text",
          Body: "Ein unflätiger Graf! ",
          Line: 1964
        }
      ],
      Line: 1963
    },
    {
      Name: "FIGARO",
      Body: [
        {
          Type: "Regie",
          Body: "öffnet irgendeine Luke im Karton",
          Line: 1968
        }
      ],
      Line: 1967
    },
    {
      Name: "",
      Body: [
        {
          Type: "Text",
          Body: "Du sagst es! ",
          Line: 1968
        }
      ],
      Line: 1968
    },
    {
      Name: "CHERUBIN",
      Body: [
        {
          Type: "Regie",
          Body: "erstaunt",
          Line: 1972
        }
      ],
      Line: 1971
    },
    {
      Name: "",
      Body: [
        {
          Type: "Text",
          Body: "Figaro?! ",
          Line: 1972
        }
      ],
      Line: 1972
    },
    {
      Name: "FIGARO",
      Body: [
        {
          Type: "Text",
          Body: "Figaro hier, Figaro dort. Ich habe alles mitgehört. Gratuliere zu deiner Beförderung. ",
          Line: 1976
        }
      ],
      Line: 1975
    },
    {
      Name: "CHERUBIN",
      Body: [
        {
          Type: "Text",
          Body: "Kein Ohrenschlecken und Hüftenlutschen mehr. Ade, du holde Weiblichkeit! ",
          Line: 1981
        }
      ],
      Line: 1980
    },
    {
      Name: "FIGARO",
      Body: [
        {
          Type: "Text",
          Body: "Halt, Cherubin! Komm her, du plumper Damenfreund! Dich brauch ich noch in meinem Plan. ",
          Line: 1986
        }
      ],
      Line: 1985
    },
    {
      Name: "",
      Body: [
        {
          Type: "Seite",
          Body: "29",
          Line: 1992
        }
      ],
      Line: 1992
    },
    {
      Name: "CHERUBIN",
      Body: [
        {
          Type: "Text",
          Body: "Es hat sich ausgeplant. Statt einer heißen französischen Umarmung blüht mir die kalte Kugel eines Franzosen. Armer Cherubin! ",
          Line: 1996
        }
      ],
      Line: 1995
    },
    {
      Name: "FIGARO",
      Body: [
        {
          Type: "Text",
          Body: "Dummer Cherubin! So ein leichtfüßiger Kerl wie du soll ein Schweißfuß der Infanterie werden? ",
          Line: 2002
        }
      ],
      Line: 2001
    },
    {
      Name: "CHERUBIN",
      Body: [
        {
          Type: "Text",
          Body: "Was soll ich in meinem Schmerze tun, Figaro? ",
          Line: 2007
        }
      ],
      Line: 2006
    },
    {
      Name: "FIGARO",
      Body: [
        {
          Type: "Text",
          Body: "Paß auf! Mit einer Heldenbrust stolzierst du beim Schloßtor hinaus, und auf leisen Zivilistensohlen schleichst du dich wieder herein. ",
          Line: 2011
        }
      ],
      Line: 2010
    },
    {
      Name: "CHERUBIN",
      Body: [
        {
          Type: "Text",
          Body: "Damit mich der Graf mit schweren Fußtritten wieder hinausbefördert. ",
          Line: 2017
        }
      ],
      Line: 2016
    },
    {
      Name: "FIGARO",
      Body: [
        {
          Type: "Text",
          Body: "Das laß meine Sache sein. ",
          Line: 2022
        }
      ],
      Line: 2021
    },
    {
      Name: "CHERUBIN",
      Body: [
        {
          Type: "Text",
          Body: "Wie kann ich meinen Hintern deine Sache sein lassen? ",
          Line: 2026
        }
      ],
      Line: 2025
    },
    {
      Name: "FIGARO",
      Body: [
        {
          Type: "Text",
          Body: "Dein Hintern ist Sache von Blanchette, denn bei ihr wirst du dich verstecken. Ich werde gleich alles vorbereiten. ",
          Line: 2030
        }
      ],
      Line: 2029
    },
    {
      Name: "CHERUBIN",
      Body: [
        {
          Type: "Text",
          Body: "Sei geküßt, Figaro. Du rettest mich vor dem sicheren Heldentum! ",
          Line: 2036
        },
        {
          Type: "Regie",
          Body: "küßt Figaro wild aufs ganze Gesicht",
          Line: 2038
        }
      ],
      Line: 2035
    },
    {
      Name: "",
      Body: [],
      Line: 2039
    },
    {
      Name: "FIGARO",
      Body: [
        {
          Type: "Text",
          Body: "Bei allen schwulen Teufeln, was soll das? ",
          Line: 2042
        }
      ],
      Line: 2041
    },
    {
      Name: "CHERUBIN",
      Body: [
        {
          Type: "Text",
          Body: "Bei allen guten Komödien, warum nicht? Kennst du nicht das Rezept aller Komödien? In der Komödie ist alles möglich, besonders das Gegenteil. Die Armen werden reich, die Reichen werden betrogen, die Unglücklichen werden glücklich, etcetera, etcetera. Und wer nichts anderes im Kopfe hat als das goldene Dreieck der Weiber, auch der treibt beizeiten ... ",
          Line: 2046
        },
        {
          Type: "Regie",
          Body: "Cherubin küßt Figaro",
          Line: 2053
        }
      ],
      Line: 2045
    },
    {
      Name: "",
      Body: [
        {
          Type: "Text",
          Body: "... das Gegenteil! ",
          Line: 2053
        }
      ],
      Line: 2053
    },
    {
      Name: "",
      Body: [
        {
          Type: "LangsameEinstellung",
          Body: "Lied Cherubin",
          Line: 2057
        }
      ],
      Line: 2057
    },
    {
      Name: "Regie",
      Body: [
        {
          Type: "Text",
          Body: "Cherubin und der Diener singen ein Lied. Den Refrain des Liedes singt Cherubin allein. ",
          Line: 2060
        }
      ],
      Line: 2059
    },
    {
      Name: "",
      Body: [
        {
          Type: "Seite",
          Body: "30",
          Line: 2064
        }
      ],
      Line: 2064
    },
    {
      Name: "CHERUBIN",
      Body: [
        {
          Type: "Regie",
          Body: "mit Diener",
          Line: 2068
        }
      ],
      Line: 2067
    },
    {
      Name: "",
      Body: [
        {
          Type: "Text",
          Body: "Wir ziehen nach Toledo, ",
          Line: 2069
        },
        {
          Type: "",
          Body: "",
          Line: 2069
        },
        {
          Type: "",
          Body: "am Tage vor der Schlacht. ",
          Line: 2069
        },
        {
          Type: "Text",
          Body: "am Tage vor der Schlacht. ",
          Line: 2070
        },
        {
          Type: "",
          Body: "",
          Line: 2070
        },
        {
          Type: "",
          Body: "Und unsre Mägen knurren, ",
          Line: 2070
        },
        {
          Type: "Text",
          Body: "Und unsre Mägen knurren, ",
          Line: 2071
        },
        {
          Type: "",
          Body: "",
          Line: 2071
        },
        {
          Type: "",
          Body: "wie der Schakal bei Nacht. ",
          Line: 2071
        },
        {
          Type: "Text",
          Body: "wie der Schakal bei Nacht. ",
          Line: 2072
        },
        {
          Type: "",
          Body: "",
          Line: 2072
        },
        {
          Type: "",
          Body: "Mein Mädchen, wo ist dein Lachen? ",
          Line: 2072
        },
        {
          Type: "Text",
          Body: "Mein Mädchen, wo ist dein Lachen? ",
          Line: 2073
        },
        {
          Type: "",
          Body: "",
          Line: 2073
        },
        {
          Type: "",
          Body: "Dein Alabastergesicht? ",
          Line: 2073
        },
        {
          Type: "Text",
          Body: "Dein Alabastergesicht? ",
          Line: 2074
        },
        {
          Type: "",
          Body: "",
          Line: 2074
        },
        {
          Type: "",
          Body: "Du weißt, ich lieb' diese Sachen, ",
          Line: 2074
        },
        {
          Type: "Text",
          Body: "Du weißt, ich lieb' diese Sachen, ",
          Line: 2075
        },
        {
          Type: "",
          Body: "",
          Line: 2075
        },
        {
          Type: "",
          Body: "verbirg sie doch nicht. ",
          Line: 2075
        },
        {
          Type: "Text",
          Body: "verbirg sie doch nicht. ",
          Line: 2076
        },
        {
          Type: "",
          Body: "",
          Line: 2076
        },
        {
          Type: "",
          Body: "Wir ziehen nach Toledo, ",
          Line: 2076
        },
        {
          Type: "Text",
          Body: "Wir ziehen nach Toledo, ",
          Line: 2077
        },
        {
          Type: "",
          Body: "",
          Line: 2077
        },
        {
          Type: "",
          Body: "die Sonne brennt so heiß. ",
          Line: 2077
        },
        {
          Type: "Text",
          Body: "die Sonne brennt so heiß. ",
          Line: 2078
        },
        {
          Type: "",
          Body: "",
          Line: 2078
        },
        {
          Type: "",
          Body: "Man hört die Felder keuchen ",
          Line: 2078
        },
        {
          Type: "Text",
          Body: "Man hört die Felder keuchen ",
          Line: 2079
        },
        {
          Type: "",
          Body: "",
          Line: 2079
        },
        {
          Type: "",
          Body: "und sauft den eigenen Schweiß. ",
          Line: 2079
        },
        {
          Type: "Text",
          Body: "und sauft den eigenen Schweiß. ",
          Line: 2080
        },
        {
          Type: "",
          Body: "",
          Line: 2080
        },
        {
          Type: "",
          Body: "Mein Mädchen, wo ist dein Lachen? ",
          Line: 2080
        },
        {
          Type: "Text",
          Body: "Mein Mädchen, wo ist dein Lachen? ",
          Line: 2081
        },
        {
          Type: "",
          Body: "",
          Line: 2081
        },
        {
          Type: "",
          Body: "Dein Alabastergesicht? ",
          Line: 2081
        },
        {
          Type: "Text",
          Body: "Dein Alabastergesicht? ",
          Line: 2082
        },
        {
          Type: "",
          Body: "",
          Line: 2082
        },
        {
          Type: "",
          Body: "Du weißt, ich lieb' diese Sachen, ",
          Line: 2082
        },
        {
          Type: "Text",
          Body: "Du weißt, ich lieb' diese Sachen, ",
          Line: 2083
        },
        {
          Type: "",
          Body: "",
          Line: 2083
        },
        {
          Type: "",
          Body: "verbirg sie doch nicht. ",
          Line: 2083
        },
        {
          Type: "Text",
          Body: "verbirg sie doch nicht. ",
          Line: 2084
        },
        {
          Type: "",
          Body: "",
          Line: 2084
        },
        {
          Type: "",
          Body: "Wir ziehen nach Toledo, ",
          Line: 2084
        },
        {
          Type: "Text",
          Body: "Wir ziehen nach Toledo, ",
          Line: 2085
        },
        {
          Type: "",
          Body: "",
          Line: 2085
        },
        {
          Type: "",
          Body: "der Abend hüllt uns ein. ",
          Line: 2085
        },
        {
          Type: "Text",
          Body: "der Abend hüllt uns ein. ",
          Line: 2086
        },
        {
          Type: "",
          Body: "",
          Line: 2086
        },
        {
          Type: "",
          Body: "Und aus den Gräben steigen ",
          Line: 2086
        },
        {
          Type: "Text",
          Body: "Und aus den Gräben steigen ",
          Line: 2087
        },
        {
          Type: "",
          Body: "",
          Line: 2087
        },
        {
          Type: "",
          Body: "die Nebel ins Mark hinein. ",
          Line: 2087
        },
        {
          Type: "Text",
          Body: "die Nebel ins Mark hinein. ",
          Line: 2088
        },
        {
          Type: "",
          Body: "",
          Line: 2088
        },
        {
          Type: "",
          Body: "Mein Mädchen, wo ist dein Lachen? ",
          Line: 2088
        },
        {
          Type: "Text",
          Body: "Mein Mädchen, wo ist dein Lachen? ",
          Line: 2089
        },
        {
          Type: "",
          Body: "",
          Line: 2089
        },
        {
          Type: "",
          Body: "Dein Alabastergesicht? ",
          Line: 2089
        },
        {
          Type: "Text",
          Body: "Dein Alabastergesicht? ",
          Line: 2090
        },
        {
          Type: "",
          Body: "",
          Line: 2090
        },
        {
          Type: "",
          Body: "Du weißt, ich lieb' diese Sachen; ",
          Line: 2090
        },
        {
          Type: "Text",
          Body: "Du weißt, ich lieb' diese Sachen; ",
          Line: 2091
        },
        {
          Type: "",
          Body: "",
          Line: 2091
        },
        {
          Type: "",
          Body: "verbirg sie doch nicht. ",
          Line: 2091
        },
        {
          Type: "Text",
          Body: "verbirg sie doch nicht. ",
          Line: 2092
        },
        {
          Type: "",
          Body: "",
          Line: 2092
        },
        {
          Type: "",
          Body: "Wir ziehen nach Toledo, ",
          Line: 2092
        },
        {
          Type: "Text",
          Body: "Wir ziehen nach Toledo, ",
          Line: 2093
        },
        {
          Type: "",
          Body: "",
          Line: 2093
        },
        {
          Type: "",
          Body: "es ist die Nacht vorm Tod. ",
          Line: 2093
        },
        {
          Type: "Text",
          Body: "es ist die Nacht vorm Tod. ",
          Line: 2094
        },
        {
          Type: "",
          Body: "",
          Line: 2094
        },
        {
          Type: "",
          Body: "Unsre Augen brennen wie Feuer, ",
          Line: 2094
        },
        {
          Type: "Text",
          Body: "Unsre Augen brennen wie Feuer, ",
          Line: 2095
        },
        {
          Type: "",
          Body: "",
          Line: 2095
        },
        {
          Type: "",
          Body: "und die Stiefel färben sich rot. ",
          Line: 2095
        },
        {
          Type: "Text",
          Body: "und die Stiefel färben sich rot. ",
          Line: 2096
        },
        {
          Type: "",
          Body: "",
          Line: 2096
        },
        {
          Type: "",
          Body: "Mein Mädchen, wo ist dein Lachen? ",
          Line: 2096
        },
        {
          Type: "Text",
          Body: "Mein Mädchen, wo ist dein Lachen? ",
          Line: 2097
        },
        {
          Type: "",
          Body: "",
          Line: 2097
        },
        {
          Type: "",
          Body: "Dein Alabastergesicht? ",
          Line: 2097
        },
        {
          Type: "Text",
          Body: "Dein Alabastergesicht? ",
          Line: 2098
        },
        {
          Type: "",
          Body: "",
          Line: 2098
        },
        {
          Type: "",
          Body: "Du weißt' ich lieb' diese Sachen, ",
          Line: 2098
        },
        {
          Type: "Text",
          Body: "Du weißt' ich lieb' diese Sachen, ",
          Line: 2099
        },
        {
          Type: "",
          Body: "",
          Line: 2099
        },
        {
          Type: "",
          Body: "verbirg sie doch nicht. ",
          Line: 2099
        },
        {
          Type: "Text",
          Body: "verbirg sie doch nicht. ",
          Line: 2100
        },
        {
          Type: "",
          Body: "",
          Line: 2100
        },
        {
          Type: "",
          Body: "Jetzt sind wir in Toledo, ",
          Line: 2100
        },
        {
          Type: "Text",
          Body: "Jetzt sind wir in Toledo, ",
          Line: 2101
        },
        {
          Type: "",
          Body: "",
          Line: 2101
        },
        {
          Type: "",
          Body: "es ist der Morgen der Schlacht. ",
          Line: 2101
        },
        {
          Type: "Text",
          Body: "es ist der Morgen der Schlacht. ",
          Line: 2102
        }
      ],
      Line: 2069
    },
    {
      Name: "",
      Body: [
        {
          Type: "Seite",
          Body: "31",
          Line: 2105
        }
      ],
      Line: 2105
    },
    {
      Name: "CHERUBIN",
      Body: [
        {
          Type: "Regie",
          Body: "mit Diener",
          Line: 2109
        }
      ],
      Line: 2108
    },
    {
      Name: "",
      Body: [
        {
          Type: "Text",
          Body: "Eine Kugel zerreißt mir den Nacken, ",
          Line: 2110
        },
        {
          Type: "",
          Body: "",
          Line: 2110
        },
        {
          Type: "",
          Body: "der Rest wird von Schwertern vollbracht. ",
          Line: 2110
        },
        {
          Type: "Text",
          Body: "der Rest wird von Schwertern vollbracht. ",
          Line: 2111
        },
        {
          Type: "",
          Body: "",
          Line: 2111
        },
        {
          Type: "",
          Body: "Ich fahre in den Himmel ",
          Line: 2111
        },
        {
          Type: "Text",
          Body: "Ich fahre in den Himmel ",
          Line: 2112
        },
        {
          Type: "",
          Body: "",
          Line: 2112
        },
        {
          Type: "",
          Body: "am Tage nach der Schlacht. ",
          Line: 2112
        },
        {
          Type: "Text",
          Body: "am Tage nach der Schlacht. ",
          Line: 2113
        },
        {
          Type: "",
          Body: "",
          Line: 2113
        },
        {
          Type: "",
          Body: "Dort gibt es lauter Helden, ",
          Line: 2113
        },
        {
          Type: "Text",
          Body: "Dort gibt es lauter Helden, ",
          Line: 2114
        },
        {
          Type: "",
          Body: "",
          Line: 2114
        },
        {
          Type: "",
          Body: "ich hab' nur an dich gedacht. ",
          Line: 2114
        },
        {
          Type: "Text",
          Body: "ich hab' nur an dich gedacht. ",
          Line: 2115
        }
      ],
      Line: 2110
    },
    {
      Name: "",
      Body: [
        {
          Type: "Einstellung",
          Body: "Dunkel",
          Line: 2118
        },
        {
          Type: "Einstellung",
          Body: "Umbau mit Musik leise",
          Line: 2119
        }
      ],
      Line: 2118
    },
    {
      Name: "Regie",
      Body: [
        {
          Type: "Text",
          Body: "Musik leise ab Titel 2",
          Line: 2120
        }
      ],
      Line: 2120
    },
    {
      Name: "",
      Body: [
        {
          Type: "Seite",
          Body: "32",
          Line: 2122
        }
      ],
      Line: 2122
    },
    {
      Name: "Regie",
      Body: [
        {
          Type: "Text",
          Body: "Zweiter Akt Das Zimmer der Gräfin. Schminktisch, Paravent usw. Susanne hilft der Gräfin beim Anziehen. Musik aus!",
          Line: 2126
        }
      ],
      Line: 2125
    },
    {
      Name: "",
      Body: [],
      Line: 2132
    },
    {
      Name: "",
      Body: [
        {
          Type: "Einstellung",
          Body: "Hell",
          Line: 2134
        }
      ],
      Line: 2134
    },
    {
      Name: "GREFIN",
      Body: [
        {
          Type: "Text",
          Body: "Was sagst du nun, mein Mädchen? Der Graf hat sein Wort gegeben. Die Hochzeit findet statt. ",
          Line: 2137
        }
      ],
      Line: 2136
    },
    {
      Name: "SUSANNE",
      Body: [
        {
          Type: "Text",
          Body: "Ihr kamt im richtigen Augenblick. ",
          Line: 2142
        }
      ],
      Line: 2141
    },
    {
      Name: "GREFIN",
      Body: [
        {
          Type: "Text",
          Body: "Dein Figaro hat mir alles erzählt. Daß dir mein Mann nachstellt... ",
          Line: 2146
        }
      ],
      Line: 2145
    },
    {
      Name: "SUSANNE",
      Body: [
        {
          Type: "Text",
          Body: "... zuerst ließ er mir nur durch Bazillus zustellen. Dann kam er selbst und forderte ... ",
          Line: 2151
        }
      ],
      Line: 2150
    },
    {
      Name: "GREFIN",
      Body: [
        {
          Type: "Text",
          Body: "Er liebt mich nicht mehr. ",
          Line: 2156
        }
      ],
      Line: 2155
    },
    {
      Name: "SUSANNE",
      Body: [
        {
          Type: "Text",
          Body: "Warum wißt Ihr das so genau? ",
          Line: 2160
        }
      ],
      Line: 2159
    },
    {
      Name: "GREFIN",
      Body: [
        {
          Type: "Text",
          Body: "Die Einsamkeit ist eine gute Lehrmeisterin, Susanne. ",
          Line: 2164
        }
      ],
      Line: 2163
    },
    {
      Name: "SUSANNE",
      Body: [
        {
          Type: "Text",
          Body: "Aber seine Eifersucht. ",
          Line: 2168
        }
      ],
      Line: 2167
    },
    {
      Name: "GREFIN",
      Body: [
        {
          Type: "Text",
          Body: "Ist nichts als Eitelkeit. Er liebt mich wie einen Gegenstand, wie seine goldenen Uhren. Zärtlichkeit für eine Uhr? ",
          Line: 2172
        },
        {
          Type: "Regie",
          Body: "leise",
          Line: 2174
        }
      ],
      Line: 2171
    },
    {
      Name: "",
      Body: [
        {
          Type: "Text",
          Body: "Ich verroste bei lebendigem Leib. Kein verstecktes Lächeln, kein verliebtes Flüstern holt mich zurück. Ich höre den Stundenschlag und bin allein mit seinem Echo. ",
          Line: 2174
        }
      ],
      Line: 2174
    },
    {
      Name: "SUSANNE",
      Body: [
        {
          Type: "Text",
          Body: "Glaubt Ihr, daß Figaro mich immer lieben wird? ",
          Line: 2181
        }
      ],
      Line: 2180
    },
    {
      Name: "GREFIN",
      Body: [
        {
          Type: "Text",
          Body: "Ich glaube, daß die Männer die Liebe nicht verstehen. ",
          Line: 2185
        }
      ],
      Line: 2184
    },
    {
      Name: "Regie",
      Body: [
        {
          Type: "Text",
          Body: "Es klopft. ",
          Line: 2189
        }
      ],
      Line: 2188
    },
    {
      Name: "FIGARO",
      Body: [
        {
          Type: "Regie",
          Body: "von draußen",
          Line: 2193
        }
      ],
      Line: 2192
    },
    {
      Name: "",
      Body: [
        {
          Type: "Text",
          Body: "Es hat geklopft! ",
          Line: 2193
        }
      ],
      Line: 2193
    },
    {
      Name: "SUSANNE",
      Body: [
        {
          Type: "Text",
          Body: "Wie meinen Frau Gräfin? ",
          Line: 2197
        }
      ],
      Line: 2196
    },
    {
      Name: "GREFIN",
      Body: [
        {
          Type: "Regie",
          Body: "macht die Stimme Figaros nach",
          Line: 2201
        }
      ],
      Line: 2200
    },
    {
      Name: "",
      Body: [
        {
          Type: "Text",
          Body: "Es hat geklopft! ",
          Line: 2201
        }
      ],
      Line: 2201
    },
    {
      Name: "Regie",
      Body: [
        {
          Type: "Text",
          Body: "lachend",
          Line: 2202
        }
      ],
      Line: 2202
    },
    {
      Name: "",
      Body: [
        {
          Type: "Text",
          Body: "Figaro steht vor der Tür. ",
          Line: 2202
        }
      ],
      Line: 2202
    },
    {
      Name: "SUSANNE",
      Body: [
        {
          Type: "Text",
          Body: "Figaro steht vor der Tür? Warum sagt er nichts? ",
          Line: 2206
        }
      ],
      Line: 2205
    },
    {
      Name: "Regie",
      Body: [
        {
          Type: "Text",
          Body: "Susanne eilt zur Tür und öffnet sie. Figaro tritt ein und hält sich die Hand vor die Augen. ",
          Line: 2210
        }
      ],
      Line: 2209
    },
    {
      Name: "FIGARO",
      Body: [
        {
          Type: "Text",
          Body: "Ich bin blind! ",
          Line: 2215
        }
      ],
      Line: 2214
    },
    {
      Name: "",
      Body: [
        {
          Type: "Seite",
          Body: "33",
          Line: 2220
        }
      ],
      Line: 2220
    },
    {
      Name: "GREFIN",
      Body: [
        {
          Type: "Regie",
          Body: "erschrocken",
          Line: 2224
        }
      ],
      Line: 2223
    },
    {
      Name: "",
      Body: [
        {
          Type: "Text",
          Body: "Bei Gott! ",
          Line: 2224
        }
      ],
      Line: 2224
    },
    {
      Name: "SUSANNE",
      Body: [
        {
          Type: "Regie",
          Body: "gleichzeitig, erschrocken",
          Line: 2228
        }
      ],
      Line: 2227
    },
    {
      Name: "",
      Body: [
        {
          Type: "Text",
          Body: "Bei Gott! ",
          Line: 2228
        }
      ],
      Line: 2228
    },
    {
      Name: "FIGARO",
      Body: [
        {
          Type: "Regie",
          Body: "nimmt die Hand von den Augen",
          Line: 2232
        }
      ],
      Line: 2231
    },
    {
      Name: "",
      Body: [
        {
          Type: "Text",
          Body: "Bei Ihrer Schönheit, meine Damen, wer könnte sie ohne Blendung überstehen! ",
          Line: 2232
        }
      ],
      Line: 2232
    },
    {
      Name: "GREFIN",
      Body: [
        {
          Type: "Text",
          Body: "Ach so. ",
          Line: 2237
        }
      ],
      Line: 2236
    },
    {
      Name: "SUSANNE",
      Body: [
        {
          Type: "Text",
          Body: "Red nicht so geschwollen. ",
          Line: 2241
        }
      ],
      Line: 2240
    },
    {
      Name: "FIGARO",
      Body: [
        {
          Type: "Text",
          Body: "Wohin sonst mit aller Schwellung, wenn nicht in die Sprache? ",
          Line: 2245
        }
      ],
      Line: 2244
    },
    {
      Name: "GREFIN",
      Body: [
        {
          Type: "Text",
          Body: "Was gibt's Neues, Figaro? ",
          Line: 2249
        }
      ],
      Line: 2248
    },
    {
      Name: "FIGARO",
      Body: [
        {
          Type: "Text",
          Body: "Ich habe den Grafen belauscht. ",
          Line: 2253
        }
      ],
      Line: 2252
    },
    {
      Name: "SUSANNE",
      Body: [
        {
          Type: "Text",
          Body: "Das ist nicht neu. ",
          Line: 2257
        }
      ],
      Line: 2256
    },
    {
      Name: "FIGARO",
      Body: [
        {
          Type: "Text",
          Body: "Der Graf hat Cherubin zum Leutnant gemacht und in den Krieg geschickt. ",
          Line: 2261
        }
      ],
      Line: 2260
    },
    {
      Name: "GREFIN",
      Body: [
        {
          Type: "Text",
          Body: "Das ist entsetzlich. ",
          Line: 2266
        }
      ],
      Line: 2265
    },
    {
      Name: "FIGARO",
      Body: [
        {
          Type: "Text",
          Body: "Halb so schrecklich. Ich habe den Bengel im Schloß versteckt. ",
          Line: 2270
        }
      ],
      Line: 2269
    },
    {
      Name: "GREFIN",
      Body: [
        {
          Type: "Text",
          Body: "Das ist gefährlich. Du kennst den Zorn des Grafen. ",
          Line: 2274
        }
      ],
      Line: 2273
    },
    {
      Name: "FIGARO",
      Body: [
        {
          Type: "Text",
          Body: "Halb so gefährlich. Ich habe dem Burschen eine Verkleidung ausgedacht, die den Grafen hoch erfreuen wird. ",
          Line: 2278
        }
      ],
      Line: 2277
    },
    {
      Name: "SUSANNE",
      Body: [
        {
          Type: "Text",
          Body: "Was meinst du damit, Figaro? ",
          Line: 2283
        }
      ],
      Line: 2282
    },
    {
      Name: "GREFIN",
      Body: [
        {
          Type: "Text",
          Body: "Du sprichst in Rätseln. ",
          Line: 2287
        }
      ],
      Line: 2286
    },
    {
      Name: "FIGARO",
      Body: [
        {
          Type: "Text",
          Body: "So hört die Lösung. Der Graf ist zornig und wird alles versuchen, die Hochzeit zu verhindern. ",
          Line: 2291
        }
      ],
      Line: 2290
    },
    {
      Name: "GREFIN",
      Body: [
        {
          Type: "Text",
          Body: "Er hat seine Zustimmung gegeben. ",
          Line: 2296
        }
      ],
      Line: 2295
    },
    {
      Name: "FIGARO",
      Body: [
        {
          Type: "Text",
          Body: "Was er gibt, kann er auch wieder nehmen. ",
          Line: 2300
        }
      ],
      Line: 2299
    },
    {
      Name: "SUSANNE",
      Body: [
        {
          Type: "Text",
          Body: "Was ihm nicht gelingen wird. ",
          Line: 2304
        }
      ],
      Line: 2303
    },
    {
      Name: "FIGARO",
      Body: [
        {
          Type: "Text",
          Body: "Was ihm wohl gelingen könnte. Wir müssen ihn versöhnlich, milde machen, wie eine katalanische Katze. Schnurr! ",
          Line: 2308
        }
      ],
      Line: 2307
    },
    {
      Name: "GREFIN",
      Body: [
        {
          Type: "Text",
          Body: "Schnurr? ",
          Line: 2314
        }
      ],
      Line: 2313
    },
    {
      Name: "SUSANNE",
      Body: [
        {
          Type: "Text",
          Body: "Schnurr? ",
          Line: 2318
        }
      ],
      Line: 2317
    },
    {
      Name: "FIGARO",
      Body: [
        {
          Type: "Text",
          Body: "Schnurr! ",
          Line: 2322
        }
      ],
      Line: 2321
    },
    {
      Name: "SUSANNE",
      Body: [
        {
          Type: "Text",
          Body: "Du spinnst, Figaro! ",
          Line: 2326
        }
      ],
      Line: 2325
    },
    {
      Name: "FIGARO",
      Body: [
        {
          Type: "Text",
          Body: "Darf ich ausreden? Susanne wird sich dem Grafen geneigt zeigen und ein Rendezvous vereinbaren. ",
          Line: 2330
        }
      ],
      Line: 2329
    },
    {
      Name: "",
      Body: [
        {
          Type: "Seite",
          Body: "34",
          Line: 2336
        }
      ],
      Line: 2336
    },
    {
      Name: "SUSANNE",
      Body: [
        {
          Type: "Text",
          Body: "Du bist verrückt, Figaro! ",
          Line: 2340
        }
      ],
      Line: 2339
    },
    {
      Name: "FIGARO",
      Body: [
        {
          Type: "Text",
          Body: "Dein Entgegenkommen macht den Grafen milde und unsere Hochzeit sicher. Und in der Nacht im Park, wenn er mit gierigen Fingern nach meiner Gemahlin grabscht ... ",
          Line: 2344
        }
      ],
      Line: 2343
    },
    {
      Name: "SUSANNE",
      Body: [
        {
          Type: "Text",
          Body: "Du bist grausam, Figaro! ",
          Line: 2351
        }
      ],
      Line: 2350
    },
    {
      Name: "FIGARO",
      Body: [
        {
          Type: "Text",
          Body: "... wird Cherubin in ihren Kleidern stecken! ",
          Line: 2355
        }
      ],
      Line: 2354
    },
    {
      Name: "SUSANNE",
      Body: [
        {
          Type: "Text",
          Body: "Du bist genial, Figaro! ",
          Line: 2359
        }
      ],
      Line: 2358
    },
    {
      Name: "FIGARO",
      Body: [
        {
          Type: "Text",
          Body: "Wenn man mich ausreden läßt. Der Graf erhält den gerechten Lohn für seine Untreue ... ",
          Line: 2363
        }
      ],
      Line: 2362
    },
    {
      Name: "GREFIN",
      Body: [
        {
          Type: "Text",
          Body: "... und Cherubin? ",
          Line: 2368
        }
      ],
      Line: 2367
    },
    {
      Name: "FIGARO",
      Body: [
        {
          Type: "Text",
          Body: "Das dreh' ich schon. ",
          Line: 2372
        }
      ],
      Line: 2371
    },
    {
      Name: "SUSANNE",
      Body: [
        {
          Type: "Text",
          Body: "Das dreht er schon, Frau Gräfin, bei seiner Begabung! ",
          Line: 2376
        }
      ],
      Line: 2375
    },
    {
      Name: "GREFIN",
      Body: [
        {
          Type: "Text",
          Body: "Der Plan gefällt mir. Aber ist er nicht zu gefährlich? ",
          Line: 2380
        }
      ],
      Line: 2379
    },
    {
      Name: "FIGARO",
      Body: [
        {
          Type: "Text",
          Body: "Gefahr, Frau Gräfin, ist ein kleiner Preis für soviel Schönheit, oder wie die Deutschen etwas plumper sagen: Wer wagt, gewinnt! ",
          Line: 2384
        }
      ],
      Line: 2383
    },
    {
      Name: "GREFIN",
      Body: [
        {
          Type: "Text",
          Body: "Dann wage, Figaro. ",
          Line: 2390
        }
      ],
      Line: 2389
    },
    {
      Name: "SUSANNE",
      Body: [
        {
          Type: "Text",
          Body: "Dann gewinne, Figaro. ",
          Line: 2394
        }
      ],
      Line: 2393
    },
    {
      Name: "FIGARO",
      Body: [
        {
          Type: "Text",
          Body: "Adieu. Ich schicke euch den Cherubin. Macht mit Kleidern und Schminke ein Mädchen aus ihm, daß dem Grafen der Mut in der Hose schwillt, daß seine Lüsternheit die Gipfel der Pyrenäen übersteigt, daß seine Geilheit wie eine Silvesterrakete die Wurmlinger Kapelle übersteigt, daß ... ",
          Line: 2398
        }
      ],
      Line: 2397
    },
    {
      Name: "SUSANNE",
      Body: [
        {
          Type: "Text",
          Body: "Halt, Figaro, du befindest dich in Gesellschaft von Damen ... ",
          Line: 2407
        }
      ],
      Line: 2406
    },
    {
      Name: "FIGARO",
      Body: [
        {
          Type: "Text",
          Body: "... die ich mit Wehmut verlasse! ",
          Line: 2411
        },
        {
          Type: "Regie",
          Body: "ab",
          Line: 2411
        }
      ],
      Line: 2410
    },
    {
      Name: "",
      Body: [],
      Line: 2412
    },
    {
      Name: "GREFIN",
      Body: [
        {
          Type: "Text",
          Body: "Ein Teufelskerl, dein Figaro. Cherubin wird gleich hier sein. ",
          Line: 2415
        }
      ],
      Line: 2414
    },
    {
      Name: "SUSANNE",
      Body: [
        {
          Type: "Text",
          Body: "Er ist so mutig. ",
          Line: 2419
        }
      ],
      Line: 2418
    },
    {
      Name: "GREFIN",
      Body: [
        {
          Type: "Text",
          Body: "Und so hübsch. ",
          Line: 2423
        }
      ],
      Line: 2422
    },
    {
      Name: "SUSANNE",
      Body: [
        {
          Type: "Text",
          Body: "Und so klug. ",
          Line: 2427
        }
      ],
      Line: 2426
    },
    {
      Name: "GREFIN",
      Body: [
        {
          Type: "Text",
          Body: "Und so jung. ",
          Line: 2431
        }
      ],
      Line: 2430
    },
    {
      Name: "SUSANNE",
      Body: [
        {
          Type: "Text",
          Body: "Ach, Figaro. ",
          Line: 2435
        }
      ],
      Line: 2434
    },
    {
      Name: "",
      Body: [
        {
          Type: "Seite",
          Body: "35",
          Line: 2440
        }
      ],
      Line: 2440
    },
    {
      Name: "GREFIN",
      Body: [
        {
          Type: "Text",
          Body: "Ach, Cherubin. Schnell, Susanne, hilf mir beim Schminken. Hier fehlen noch zwei Locken. Sind meine Wangen nicht zu blaß? Meine Haare sind ganz durcheinander. ",
          Line: 2444
        }
      ],
      Line: 2443
    },
    {
      Name: "Regie",
      Body: [
        {
          Type: "Text",
          Body: "Es klopft. ",
          Line: 2450
        }
      ],
      Line: 2449
    },
    {
      Name: "SUSANNE",
      Body: [
        {
          Type: "Text",
          Body: "So wie Ihr, Madame. ",
          Line: 2454
        }
      ],
      Line: 2453
    },
    {
      Name: "GREFIN",
      Body: [
        {
          Type: "Text",
          Body: "Was willst du damit sagen? ",
          Line: 2458
        }
      ],
      Line: 2457
    },
    {
      Name: "Regie",
      Body: [
        {
          Type: "Text",
          Body: "Es klopft. ",
          Line: 2462
        }
      ],
      Line: 2461
    },
    {
      Name: "SUSANNE",
      Body: [
        {
          Type: "Text",
          Body: "Die Antwort steht vor der Tür. ",
          Line: 2466
        }
      ],
      Line: 2465
    },
    {
      Name: "Regie",
      Body: [
        {
          Type: "Text",
          Body: "Susanne öffnet die Tür. Cherubin tritt ein. ",
          Line: 2470
        }
      ],
      Line: 2469
    },
    {
      Name: "SUSANNE",
      Body: [
        {
          Type: "Text",
          Body: "Grüß Gott, Herr General. ",
          Line: 2474
        }
      ],
      Line: 2473
    },
    {
      Name: "CHERUBIN",
      Body: [
        {
          Type: "Text",
          Body: "Grüß Gott, Susanne. ",
          Line: 2478
        }
      ],
      Line: 2477
    },
    {
      Name: "GREFIN",
      Body: [
        {
          Type: "Text",
          Body: "Grüß Gott, Herr Leutnant. ",
          Line: 2482
        }
      ],
      Line: 2481
    },
    {
      Name: "CHERUBIN",
      Body: [
        {
          Type: "Text",
          Body: "Meine Ergebenheit, Frau Gräfin. Oh, ich bin blind! ",
          Line: 2486
        }
      ],
      Line: 2485
    },
    {
      Name: "SUSANNE",
      Body: [
        {
          Type: "Text",
          Body: "Bei Ihrer Schönheit, meine Dame, wer könnte sie ohne Blendung überstehen? Die Stelle ist schon vorgekommen. ",
          Line: 2490
        }
      ],
      Line: 2489
    },
    {
      Name: "CHERUBIN",
      Body: [
        {
          Type: "Regie",
          Body: "zur Gräfin",
          Line: 2495
        }
      ],
      Line: 2494
    },
    {
      Name: "",
      Body: [
        {
          Type: "Text",
          Body: "Der Graf hat mich zum Krieger gemacht. Helft mir, schöne Dame. ",
          Line: 2495
        }
      ],
      Line: 2495
    },
    {
      Name: "SUSANNE",
      Body: [
        {
          Type: "Text",
          Body: "Was für eine mutige Anrede. ",
          Line: 2500
        }
      ],
      Line: 2499
    },
    {
      Name: "GREFIN",
      Body: [
        {
          Type: "Text",
          Body: "Wie anmutig er redet. Hat dir Figaro alles erzählt? ",
          Line: 2504
        }
      ],
      Line: 2503
    },
    {
      Name: "CHERUBIN",
      Body: [
        {
          Type: "Text",
          Body: "So viel, als daß Ihr mich erwartet. ",
          Line: 2508
        }
      ],
      Line: 2507
    },
    {
      Name: "GREFIN",
      Body: [
        {
          Type: "Text",
          Body: "Gut, Susanne, sperr die Tür ab. ",
          Line: 2512
        }
      ],
      Line: 2511
    },
    {
      Name: "Regie",
      Body: [
        {
          Type: "Text",
          Body: "Susanne sperrt die Tür ab. ",
          Line: 2516
        }
      ],
      Line: 2515
    },
    {
      Name: "CHERUBIN",
      Body: [
        {
          Type: "Regie",
          Body: "verwundert",
          Line: 2520
        }
      ],
      Line: 2519
    },
    {
      Name: "",
      Body: [
        {
          Type: "Text",
          Body: "Frau Gräfin? ",
          Line: 2520
        }
      ],
      Line: 2520
    },
    {
      Name: "GREFIN",
      Body: [
        {
          Type: "Text",
          Body: "Herr Leutnant? Zieh deinen Rock aus, Cherubin. ",
          Line: 2524
        }
      ],
      Line: 2523
    },
    {
      Name: "CHERUBIN",
      Body: [
        {
          Type: "Regie",
          Body: "noch mehr verwundert",
          Line: 2528
        }
      ],
      Line: 2527
    },
    {
      Name: "",
      Body: [
        {
          Type: "Text",
          Body: "Frau Gräfin? ",
          Line: 2528
        }
      ],
      Line: 2528
    },
    {
      Name: "GREFIN",
      Body: [
        {
          Type: "Text",
          Body: "Herr Leutnant? Zieh dein Kleid aus, Susanne. ",
          Line: 2532
        }
      ],
      Line: 2531
    },
    {
      Name: "CHERUBIN",
      Body: [
        {
          Type: "Text",
          Body: "Ich soll mich wirklich ausziehen? ",
          Line: 2536
        }
      ],
      Line: 2535
    },
    {
      Name: "GREFIN",
      Body: [
        {
          Type: "Text",
          Body: "Du sollst Susannes Kleid anziehen. Eine Maskerade, mein Freund. ",
          Line: 2540
        }
      ],
      Line: 2539
    },
    {
      Name: "CHERUBIN",
      Body: [
        {
          Type: "Text",
          Body: "Eine Maskerade? ",
          Line: 2544
        }
      ],
      Line: 2543
    },
    {
      Name: "SUSANNE",
      Body: [
        {
          Type: "Text",
          Body: "Herr General sollen das hübscheste Mädchen der Umgebung werden. Wie gefällt dir das? ",
          Line: 2548
        }
      ],
      Line: 2547
    },
    {
      Name: "",
      Body: [
        {
          Type: "Seite",
          Body: "36",
          Line: 2554
        }
      ],
      Line: 2554
    },
    {
      Name: "CHERUBIN",
      Body: [
        {
          Type: "Regie",
          Body: "nach kurzer Überlegung",
          Line: 2558
        }
      ],
      Line: 2557
    },
    {
      Name: "",
      Body: [
        {
          Type: "Text",
          Body: "Lieber ein falsches Mädchen als ein echter Held. ",
          Line: 2558
        }
      ],
      Line: 2558
    },
    {
      Name: "Regie",
      Body: [
        {
          Type: "Text",
          Body: "Susanne hat ihr Kleid ausgezogen, Cherubin seinen Rock. ",
          Line: 2563
        }
      ],
      Line: 2562
    },
    {
      Name: "SUSANNE",
      Body: [
        {
          Type: "Text",
          Body: "Hände hoch, Herr Soldat! Niederknien! ",
          Line: 2567
        }
      ],
      Line: 2566
    },
    {
      Name: "Regie",
      Body: [
        {
          Type: "Text",
          Body: "Cherubin kniet nieder und hebt seine Arme. Susanne stülpt ihm ihr Kleid über den Kopf. ",
          Line: 2571
        }
      ],
      Line: 2570
    },
    {
      Name: "SUSANNE",
      Body: [
        {
          Type: "Regie",
          Body: "zu Cherubin",
          Line: 2576
        }
      ],
      Line: 2575
    },
    {
      Name: "",
      Body: [
        {
          Type: "Text",
          Body: "Nun, mein Fräulein, wie paßt die neue Garderobe? ",
          Line: 2576
        }
      ],
      Line: 2576
    },
    {
      Name: "CHERUBIN",
      Body: [
        {
          Type: "Text",
          Body: "Nicht schlecht, mein Fräulein. Die Schultern sind etwas zu eng, und die Brust ist ein bißchen flach. Haben die Damen zufällig einen Busen übrig? ",
          Line: 2581
        }
      ],
      Line: 2580
    },
    {
      Name: "SUSANNE",
      Body: [
        {
          Type: "Text",
          Body: "Mein Herr, benehmen Sie sich. ",
          Line: 2587
        }
      ],
      Line: 2586
    },
    {
      Name: "CHERUBIN",
      Body: [
        {
          Type: "Text",
          Body: "Aber unter Damen ... ",
          Line: 2591
        }
      ],
      Line: 2590
    },
    {
      Name: "SUSANNE",
      Body: [
        {
          Type: "Text",
          Body: "Die Rolle gefällt ihm. Um so besser. ",
          Line: 2595
        }
      ],
      Line: 2594
    },
    {
      Name: "CHERUBIN",
      Body: [
        {
          Type: "Regie",
          Body: "übermütig, verbeugt sich vor Susanne",
          Line: 2599
        }
      ],
      Line: 2598
    },
    {
      Name: "",
      Body: [
        {
          Type: "Text",
          Body: "Will der Herr ein Tänzchen wagen? ",
          Line: 2599
        }
      ],
      Line: 2599
    },
    {
      Name: "Regie",
      Body: [
        {
          Type: "Text",
          Body: "Cherubin nimmt Susanne und macht mit ihr ein paar Tanzschritte",
          Line: 2601
        }
      ],
      Line: 2601
    },
    {
      Name: "",
      Body: [],
      Line: 2603
    },
    {
      Name: "SUSANNE",
      Body: [
        {
          Type: "Text",
          Body: "Was für eine zudringliche Frauensperson! ",
          Line: 2606
        }
      ],
      Line: 2605
    },
    {
      Name: "CHERUBIN",
      Body: [
        {
          Type: "Regie",
          Body: "zur Gräfin",
          Line: 2610
        }
      ],
      Line: 2609
    },
    {
      Name: "",
      Body: [
        {
          Type: "Text",
          Body: "Finden Sie nicht, meine Liebe, dass ich in letzter Zeit blaß aussehe? ",
          Line: 2610
        }
      ],
      Line: 2610
    },
    {
      Name: "GREFIN",
      Body: [
        {
          Type: "Text",
          Body: "Ich finde, Sie sollten ausspannen, meine Liebe. ",
          Line: 2615
        }
      ],
      Line: 2614
    },
    {
      Name: "CHERUBIN",
      Body: [
        {
          Type: "Text",
          Body: "Sie haben recht, meine Liebe. Diese ständigen Liebschaften ermatten mich zusehends. ",
          Line: 2619
        },
        {
          Type: "Regie",
          Body: "zu Susanne",
          Line: 2620
        }
      ],
      Line: 2618
    },
    {
      Name: "",
      Body: [
        {
          Type: "Text",
          Body: "Zofe, mein linkes Auge wirkt so ungünstig. ",
          Line: 2621
        }
      ],
      Line: 2621
    },
    {
      Name: "GREFIN",
      Body: [
        {
          Type: "Text",
          Body: "Los, Susanne, hol die Perücke. ",
          Line: 2625
        }
      ],
      Line: 2624
    },
    {
      Name: "Regie",
      Body: [
        {
          Type: "Text",
          Body: "Susanne holt die Perücke. Die Gräfin und Susanne schminken Cherubin. Grimassen, Gelächter. ",
          Line: 2629
        }
      ],
      Line: 2628
    },
    {
      Name: "CHERUBIN",
      Body: [
        {
          Type: "Text",
          Body: "Etwas mehr Sinnlichkeit um den Mund, wenn ich bitten darf. ",
          Line: 2634
        }
      ],
      Line: 2633
    },
    {
      Name: "Regie",
      Body: [
        {
          Type: "Text",
          Body: "Susanne setzt Cherubin die Perücke auf. ",
          Line: 2638
        }
      ],
      Line: 2637
    },
    {
      Name: "CHERUBIN",
      Body: [
        {
          Type: "Text",
          Body: "Schon wieder Dauerwelle. Gibt's keine modernen Frisuren im Fundus? ",
          Line: 2642
        }
      ],
      Line: 2641
    },
    {
      Name: "SUSANNE",
      Body: [
        {
          Type: "Text",
          Body: "Sie sind eine Schönheit, Madame. ",
          Line: 2646
        }
      ],
      Line: 2645
    },
    {
      Name: "",
      Body: [
        {
          Type: "Seite",
          Body: "37",
          Line: 2651
        }
      ],
      Line: 2651
    },
    {
      Name: "CHERUBIN",
      Body: [
        {
          Type: "Text",
          Body: "Danke, ich bin Komplimente gewohnt. ",
          Line: 2655
        }
      ],
      Line: 2654
    },
    {
      Name: "SUSANNE",
      Body: [
        {
          Type: "Text",
          Body: "Direkt zum Anbeißen. ",
          Line: 2659
        }
      ],
      Line: 2658
    },
    {
      Name: "CHERUBIN",
      Body: [
        {
          Type: "Text",
          Body: "Sie stehen hier halb in Unterhosen und wagen es, einer Dame ... ",
          Line: 2663
        }
      ],
      Line: 2662
    },
    {
      Name: "SUSANNE",
      Body: [
        {
          Type: "Text",
          Body: "Blöder Kerl! ",
          Line: 2668
        },
        {
          Type: "Regie",
          Body: "wendet sich zum Gehen",
          Line: 2668
        }
      ],
      Line: 2667
    },
    {
      Name: "",
      Body: [
        {
          Type: "Text",
          Body: "Ich ziehe mir nur schnell ein Kleid an. Ein Handkuß den Damen. ",
          Line: 2669
        }
      ],
      Line: 2669
    },
    {
      Name: "Regie",
      Body: [
        {
          Type: "Text",
          Body: "ab",
          Line: 2669
        }
      ],
      Line: 2669
    },
    {
      Name: "",
      Body: [],
      Line: 2670
    },
    {
      Name: "Regie",
      Body: [
        {
          Type: "Text",
          Body: "Die Gräfin und Cherubin sehen sich verlegen an. Pause. ",
          Line: 2673
        }
      ],
      Line: 2672
    },
    {
      Name: "GREFIN",
      Body: [
        {
          Type: "Text",
          Body: "Nun, junger Mann? ",
          Line: 2677
        }
      ],
      Line: 2676
    },
    {
      Name: "CHERUBIN",
      Body: [
        {
          Type: "Text",
          Body: "Ja, schöne Dame? ",
          Line: 2681
        }
      ],
      Line: 2680
    },
    {
      Name: "Regie",
      Body: [
        {
          Type: "Text",
          Body: "Pause. ",
          Line: 2685
        }
      ],
      Line: 2684
    },
    {
      Name: "GREFIN",
      Body: [
        {
          Type: "Text",
          Body: "Wie geht's zu Hause? ",
          Line: 2689
        }
      ],
      Line: 2688
    },
    {
      Name: "CHERUBIN",
      Body: [
        {
          Type: "Text",
          Body: "Ich bin Waise. ",
          Line: 2693
        }
      ],
      Line: 2692
    },
    {
      Name: "GREFIN",
      Body: [
        {
          Type: "Text",
          Body: "Ach So. ",
          Line: 2697
        }
      ],
      Line: 2696
    },
    {
      Name: "Regie",
      Body: [
        {
          Type: "Text",
          Body: "Pause. ",
          Line: 2701
        }
      ],
      Line: 2700
    },
    {
      Name: "CHERUBIN",
      Body: [
        {
          Type: "Text",
          Body: "Frau Gräfin? ",
          Line: 2705
        }
      ],
      Line: 2704
    },
    {
      Name: "GREFIN",
      Body: [
        {
          Type: "Text",
          Body: "Ja, Cherubin? ",
          Line: 2709
        }
      ],
      Line: 2708
    },
    {
      Name: "CHERUBIN",
      Body: [
        {
          Type: "Text",
          Body: "Sind Sie auch verwaist? ",
          Line: 2713
        }
      ],
      Line: 2712
    },
    {
      Name: "GREFIN",
      Body: [
        {
          Type: "Text",
          Body: "Ich bin einsam! ",
          Line: 2717
        }
      ],
      Line: 2716
    },
    {
      Name: "CHERUBIN",
      Body: [
        {
          Type: "Text",
          Body: "Bekommen Sie wenig Besuch? ",
          Line: 2721
        }
      ],
      Line: 2720
    },
    {
      Name: "Regie",
      Body: [
        {
          Type: "Text",
          Body: "Pause. ",
          Line: 2725
        }
      ],
      Line: 2724
    },
    {
      Name: "GREFIN",
      Body: [
        {
          Type: "Text",
          Body: "Was denken die einfachen Leute über mich? ",
          Line: 2729
        }
      ],
      Line: 2728
    },
    {
      Name: "CHERUBIN",
      Body: [
        {
          Type: "Text",
          Body: "Sie gehorchen Ihnen, Frau Gräfin. ",
          Line: 2733
        }
      ],
      Line: 2732
    },
    {
      Name: "GREFIN",
      Body: [
        {
          Type: "Text",
          Body: "Ach So. ",
          Line: 2737
        }
      ],
      Line: 2736
    },
    {
      Name: "CHERUBIN",
      Body: [
        {
          Type: "Text",
          Body: "Darf ich etwas sagen? ",
          Line: 2741
        }
      ],
      Line: 2740
    },
    {
      Name: "GREFIN",
      Body: [
        {
          Type: "Text",
          Body: "Ja, Cherubin? ",
          Line: 2745
        }
      ],
      Line: 2744
    },
    {
      Name: "CHERUBIN",
      Body: [
        {
          Type: "Text",
          Body: "Ich kann jetzt nicht. ",
          Line: 2749
        }
      ],
      Line: 2748
    },
    {
      Name: "GREFIN",
      Body: [
        {
          Type: "Text",
          Body: "Dann sag es später. ",
          Line: 2753
        }
      ],
      Line: 2752
    },
    {
      Name: "CHERUBIN",
      Body: [
        {
          Type: "Text",
          Body: "Sie sind sehr schön, Frau Gräfin. Ich ... ",
          Line: 2757
        }
      ],
      Line: 2756
    },
    {
      Name: "GREFIN",
      Body: [
        {
          Type: "Text",
          Body: "Ja, Cherubin? ",
          Line: 2761
        }
      ],
      Line: 2760
    },
    {
      Name: "CHERUBIN",
      Body: [
        {
          Type: "Text",
          Body: "Ich kann jetzt nicht. ",
          Line: 2765
        }
      ],
      Line: 2764
    },
    {
      Name: "Regie",
      Body: [
        {
          Type: "Text",
          Body: "Pause. ",
          Line: 2769
        }
      ],
      Line: 2768
    },
    {
      Name: "GREFIN",
      Body: [
        {
          Type: "Text",
          Body: "Magst du Oliven, Cherubin? ",
          Line: 2773
        }
      ],
      Line: 2772
    },
    {
      Name: "",
      Body: [
        {
          Type: "Seite",
          Body: "38",
          Line: 2778
        }
      ],
      Line: 2778
    },
    {
      Name: "CHERUBIN",
      Body: [
        {
          Type: "Text",
          Body: "Die schwarzen oder die grünen? ",
          Line: 2782
        }
      ],
      Line: 2781
    },
    {
      Name: "GREFIN",
      Body: [
        {
          Type: "Text",
          Body: "Die von den Bauern. ",
          Line: 2786
        }
      ],
      Line: 2785
    },
    {
      Name: "CHERUBIN",
      Body: [
        {
          Type: "Text",
          Body: "Ich mag die Bauern, und ich mag die Oliven. Ich ziehe oft über die Felder. ",
          Line: 2790
        }
      ],
      Line: 2789
    },
    {
      Name: "GREFIN",
      Body: [
        {
          Type: "Text",
          Body: "Tanzen die Burschen noch immer nach der Ernte? ",
          Line: 2795
        }
      ],
      Line: 2794
    },
    {
      Name: "CHERUBIN",
      Body: [
        {
          Type: "Text",
          Body: "Sie tanzen, bis die Mädchen umfallen. ",
          Line: 2799
        }
      ],
      Line: 2798
    },
    {
      Name: "Regie",
      Body: [
        {
          Type: "Text",
          Body: "Pause. ",
          Line: 2803
        }
      ],
      Line: 2802
    },
    {
      Name: "CHERUBIN",
      Body: [
        {
          Type: "Text",
          Body: "Frau Gräfin? ",
          Line: 2807
        }
      ],
      Line: 2806
    },
    {
      Name: "GREFIN",
      Body: [
        {
          Type: "Text",
          Body: "Ja, Cherubin? ",
          Line: 2811
        }
      ],
      Line: 2810
    },
    {
      Name: "CHERUBIN",
      Body: [
        {
          Type: "Text",
          Body: "Ich bin ein Diener. ",
          Line: 2815
        }
      ],
      Line: 2814
    },
    {
      Name: "GREFIN",
      Body: [
        {
          Type: "Text",
          Body: "Ja, Cherubin? ",
          Line: 2819
        }
      ],
      Line: 2818
    },
    {
      Name: "CHERUBIN",
      Body: [
        {
          Type: "Text",
          Body: "Ich bin ein junger Mensch. ",
          Line: 2823
        }
      ],
      Line: 2822
    },
    {
      Name: "GREFIN",
      Body: [
        {
          Type: "Text",
          Body: "Ja, Cherubin? ",
          Line: 2827
        }
      ],
      Line: 2826
    },
    {
      Name: "CHERUBIN",
      Body: [
        {
          Type: "Text",
          Body: "Ich bin ein junger Mann. ",
          Line: 2831
        }
      ],
      Line: 2830
    },
    {
      Name: "GREFIN",
      Body: [
        {
          Type: "Text",
          Body: "Ja, Cherubin? ",
          Line: 2835
        }
      ],
      Line: 2834
    },
    {
      Name: "CHERUBIN",
      Body: [
        {
          Type: "Text",
          Body: "Sie sind so weit entfernt. ",
          Line: 2839
        }
      ],
      Line: 2838
    },
    {
      Name: "GREFIN",
      Body: [
        {
          Type: "Text",
          Body: "Ja, Cherubin. ",
          Line: 2843
        }
      ],
      Line: 2842
    },
    {
      Name: "CHERUBIN",
      Body: [
        {
          Type: "Text",
          Body: "Kann man mit drei Schritten alles überspringen? ",
          Line: 2847
        }
      ],
      Line: 2846
    },
    {
      Name: "Regie",
      Body: [
        {
          Type: "Text",
          Body: "Es klopft. Die Gräfin und Cherubin schauen sich ängstlich an. Stille. ",
          Line: 2851
        }
      ],
      Line: 2850
    },
    {
      Name: "GRAF",
      Body: [
        {
          Type: "Regie",
          Body: "von draußen",
          Line: 2857
        }
      ],
      Line: 2856
    },
    {
      Name: "",
      Body: [
        {
          Type: "Text",
          Body: "Warum ist hier abgesperrt?! ",
          Line: 2857
        }
      ],
      Line: 2857
    },
    {
      Name: "GREFIN",
      Body: [
        {
          Type: "Text",
          Body: "O Gott, der Graf! ",
          Line: 2861
        }
      ],
      Line: 2860
    },
    {
      Name: "CHERUBIN",
      Body: [
        {
          Type: "Text",
          Body: "Der Graf? O Gott! ",
          Line: 2865
        }
      ],
      Line: 2864
    },
    {
      Name: "GRAF",
      Body: [
        {
          Type: "Regie",
          Body: "von draußen",
          Line: 2869
        }
      ],
      Line: 2868
    },
    {
      Name: "",
      Body: [
        {
          Type: "Text",
          Body: "Öffnen Sie sofort die Tür, Madame! Warum sperren Sie sich ein? ",
          Line: 2869
        }
      ],
      Line: 2869
    },
    {
      Name: "GREFIN",
      Body: [
        {
          Type: "Text",
          Body: "Weil, weil ich allein bin. ",
          Line: 2874
        },
        {
          Type: "Regie",
          Body: "Zu Cherubin",
          Line: 2874
        }
      ],
      Line: 2873
    },
    {
      Name: "",
      Body: [
        {
          Type: "Text",
          Body: "Schnell in meine Garderobe! ",
          Line: 2874
        }
      ],
      Line: 2874
    },
    {
      Name: "GRAF",
      Body: [
        {
          Type: "Regie",
          Body: "von draußen",
          Line: 2879
        }
      ],
      Line: 2878
    },
    {
      Name: "",
      Body: [
        {
          Type: "Text",
          Body: "Weil Sie allein sind? Ich höre Sie doch sprechen! ",
          Line: 2879
        }
      ],
      Line: 2879
    },
    {
      Name: "GREFIN",
      Body: [
        {
          Type: "Text",
          Body: "Ich spreche? Natürlich, mit Ihnen. ",
          Line: 2883
        }
      ],
      Line: 2882
    },
    {
      Name: "Regie",
      Body: [
        {
          Type: "Text",
          Body: "Cherubin verschwindet in die Garderobe. Die Gräfin öffnet die Tür. Der Graf stürzt herein ",
          Line: 2887
        }
      ],
      Line: 2886
    },
    {
      Name: "",
      Body: [
        {
          Type: "Einstellung",
          Body: "Voll Hell",
          Line: 2891
        }
      ],
      Line: 2891
    },
    {
      Name: "GRAF",
      Body: [
        {
          Type: "Text",
          Body: "Wo ist er? ",
          Line: 2894
        }
      ],
      Line: 2893
    },
    {
      Name: "GREFIN",
      Body: [
        {
          Type: "Text",
          Body: "Wer er? ",
          Line: 2898
        }
      ],
      Line: 2897
    },
    {
      Name: "",
      Body: [
        {
          Type: "Seite",
          Body: "39",
          Line: 2903
        }
      ],
      Line: 2903
    },
    {
      Name: "GRAF",
      Body: [
        {
          Type: "Text",
          Body: "Er! Ich hörte eine männliche Stimme. ",
          Line: 2907
        }
      ],
      Line: 2906
    },
    {
      Name: "GREFIN",
      Body: [
        {
          Type: "Text",
          Body: "Ach, Sie meinen Susanne. ",
          Line: 2911
        }
      ],
      Line: 2910
    },
    {
      Name: "GRAF",
      Body: [
        {
          Type: "Text",
          Body: "Wollen Sie mir eine Kuh für einen Stier vormachen? ",
          Line: 2915
        }
      ],
      Line: 2914
    },
    {
      Name: "GREFIN",
      Body: [
        {
          Type: "Text",
          Body: "Sie sehen rot, Herr Graf, zu Unrecht. Ich habe mit Susanne Kleider für die Hochzeit probiert, und als sie Ihre männliche Stimme vernahm, verschwand sie schnell in meiner Garderobe. ",
          Line: 2919
        }
      ],
      Line: 2918
    },
    {
      Name: "GRAF",
      Body: [
        {
          Type: "Text",
          Body: "Ich will sie sofort sehen! ",
          Line: 2926
        }
      ],
      Line: 2925
    },
    {
      Name: "GREFIN",
      Body: [
        {
          Type: "Text",
          Body: "Meine Garderobe? ",
          Line: 2930
        }
      ],
      Line: 2929
    },
    {
      Name: "GRAF",
      Body: [
        {
          Type: "Text",
          Body: "Den Inhalt! ",
          Line: 2934
        }
      ],
      Line: 2933
    },
    {
      Name: "GREFIN",
      Body: [
        {
          Type: "Text",
          Body: "Meine Kleider? Interessieren Sie sich für Damenmode? ",
          Line: 2938
        }
      ],
      Line: 2937
    },
    {
      Name: "GRAF",
      Body: [
        {
          Type: "Text",
          Body: "Machen Sie mich nicht rasend, Gräfin! Susanne, komm sofort heraus! ",
          Line: 2942
        }
      ],
      Line: 2941
    },
    {
      Name: "GREFIN",
      Body: [
        {
          Type: "Text",
          Body: "Halt, Herr Graf! Susanne ist gerade beim Umziehen. Sie wird halb nackt sein. ",
          Line: 2947
        }
      ],
      Line: 2946
    },
    {
      Name: "GRAF",
      Body: [
        {
          Type: "Text",
          Body: "Ich will sie sofort sehen! ",
          Line: 2952
        }
      ],
      Line: 2951
    },
    {
      Name: "GREFIN",
      Body: [
        {
          Type: "Text",
          Body: "Das halbnackte Mädchen? Ein verdächtiges Interesse für meine Zofe, Herr Graf. ",
          Line: 2956
        }
      ],
      Line: 2955
    },
    {
      Name: "GRAF",
      Body: [
        {
          Type: "Text",
          Body: "Es geht um die Ehre eines Grafen. Wollen Sie bitte die Dienstboten ausklammern? ",
          Line: 2961
        }
      ],
      Line: 2960
    },
    {
      Name: "GREFIN",
      Body: [
        {
          Type: "Text",
          Body: "Es geht um die Ehre einer Gräfin. Wollen Sie bitte Ihre Nachstellungen einstellen? ",
          Line: 2966
        }
      ],
      Line: 2965
    },
    {
      Name: "GRAF",
      Body: [
        {
          Type: "Text",
          Body: "Nun gut, wenn das Mädchen auch nackt ist, so kann es doch reden. Susanne, bist du in der Garderobe? ",
          Line: 2971
        }
      ],
      Line: 2970
    },
    {
      Name: "CHERUBIN",
      Body: [
        {
          Type: "Text",
          Body: "Nein ... ",
          Line: 2976
        }
      ],
      Line: 2975
    },
    {
      Name: "GREFIN",
      Body: [
        {
          Type: "Text",
          Body: "Susanne, ich verbiete dir, zu antworten! ",
          Line: 2980
        }
      ],
      Line: 2979
    },
    {
      Name: "GRAF",
      Body: [
        {
          Type: "Text",
          Body: "Sie machen sich höchst verdächtig, Frau Gräfin. ",
          Line: 2984
        }
      ],
      Line: 2983
    },
    {
      Name: "GREFIN",
      Body: [
        {
          Type: "Text",
          Body: "Das wird sich zeigen. ",
          Line: 2988
        }
      ],
      Line: 2987
    },
    {
      Name: "GRAF",
      Body: [
        {
          Type: "Text",
          Body: "Ich lasse die Tür mit Gewalt aufbrechen. Wollen Sie die Güte haben, mich zu begleiten? Ich werde Ihr Zimmer von außen absperren. Alles bleibt, wo es ist! ",
          Line: 2992
        }
      ],
      Line: 2991
    },
    {
      Name: "GREFIN",
      Body: [
        {
          Type: "Text",
          Body: "Sie gehen zu weit, Graf! ",
          Line: 2998
        }
      ],
      Line: 2997
    },
    {
      Name: "GRAF",
      Body: [
        {
          Type: "Text",
          Body: "Sie gehen mit, Gräfin. ",
          Line: 3002
        }
      ],
      Line: 3001
    },
    {
      Name: "Regie",
      Body: [
        {
          Type: "Text",
          Body: "Graf und Gräfin ab. Susanne kommt aus ihrem Zimmer. ",
          Line: 3006
        }
      ],
      Line: 3005
    },
    {
      Name: "",
      Body: [
        {
          Type: "Einstellung",
          Body: "Hell",
          Line: 3009
        }
      ],
      Line: 3009
    },
    {
      Name: "SUSANNE",
      Body: [
        {
          Type: "Text",
          Body: "Bei allen Brennesseln der Sierra! Mußte der ",
          Line: 3012
        }
      ],
      Line: 3011
    },
    {
      Name: "",
      Body: [
        {
          Type: "Seite",
          Body: "40",
          Line: 3017
        }
      ],
      Line: 3017
    },
    {
      Name: "SUSANNE",
      Body: [
        {
          Type: "Text",
          Body: "Graf ausgerechnet jetzt kommen? Das ist eine dumme Geschichte. ",
          Line: 3021
        }
      ],
      Line: 3020
    },
    {
      Name: "CHERUBIN",
      Body: [
        {
          Type: "Regie",
          Body: "wankt zitternd aus der Garderobe",
          Line: 3025
        }
      ],
      Line: 3024
    },
    {
      Name: "",
      Body: [
        {
          Type: "Text",
          Body: "Das überleb' ich nicht. Nein, das überleb' ich nicht. Wenn der Graf mich noch einmal erwischt, ende ich frühzeitig. Ich scheide aus dieser Komödie! ",
          Line: 3026
        }
      ],
      Line: 3026
    },
    {
      Name: "SUSANNE",
      Body: [
        {
          Type: "Text",
          Body: "Du mußt verschwinden, Cherubin. ",
          Line: 3032
        }
      ],
      Line: 3031
    },
    {
      Name: "CHERUBIN",
      Body: [
        {
          Type: "Text",
          Body: "Wohin, Susanne? Den Trick mit dem Lehnstuhl kennt der Graf schon. Hinter den Vorhängen hat er mich auch schon erwischt. In der Garderobe darf er mich nicht finden. Ha! Ich hab's! Ein Sprung aus dem Fenster! ",
          Line: 3036
        }
      ],
      Line: 3035
    },
    {
      Name: "SUSANNE",
      Body: [
        {
          Type: "Text",
          Body: "Das ist zu gefährlich, Cherubin. ",
          Line: 3043
        }
      ],
      Line: 3042
    },
    {
      Name: "CHERUBIN",
      Body: [
        {
          Type: "Regie",
          Body: "stellt sich ans Fensterkreuz, etwas pathetisch",
          Line: 3047
        }
      ],
      Line: 3046
    },
    {
      Name: "",
      Body: [
        {
          Type: "Text",
          Body: "Ein bißchen Gefahr, Susanne, ist ein kleiner Preis für ein gewonnenes Leben. ",
          Line: 3048
        }
      ],
      Line: 3048
    },
    {
      Name: "SUSANNE",
      Body: [
        {
          Type: "Text",
          Body: "Du kannst dir den Hals brechen, Cherubin. ",
          Line: 3053
        }
      ],
      Line: 3052
    },
    {
      Name: "CHERUBIN",
      Body: [
        {
          Type: "Regie",
          Body: "geht zu Susanne, beinahe sachlich",
          Line: 3057
        }
      ],
      Line: 3056
    },
    {
      Name: "",
      Body: [
        {
          Type: "Text",
          Body: "Sollte es tatsächlich ein Sprung in die Ewigkeit werden, so brauch' ich vorher eine kleine Wegzehrung. ",
          Line: 3057
        }
      ],
      Line: 3057
    },
    {
      Name: "Regie",
      Body: [
        {
          Type: "Text",
          Body: "Er küßt Susanne innig und geht wieder ans Fenster.",
          Line: 3060
        }
      ],
      Line: 3060
    },
    {
      Name: "",
      Body: [
        {
          Type: "Text",
          Body: "Sag der Frau Gräfin ... ",
          Line: 3061
        }
      ],
      Line: 3061
    },
    {
      Name: "DIENER",
      Body: [
        {
          Type: "Regie",
          Body: "von draußen, seine Stimme kommt näher",
          Line: 3065
        }
      ],
      Line: 3064
    },
    {
      Name: "",
      Body: [
        {
          Type: "Text",
          Body: "Seine Exzellenz, der besonders wohlgeborene Graf von Almaviva ... ",
          Line: 3065
        }
      ],
      Line: 3065
    },
    {
      Name: "Regie",
      Body: [
        {
          Type: "Text",
          Body: "Cherubin springt. Susanne stürzt zum Fenster. ",
          Line: 3070
        }
      ],
      Line: 3069
    },
    {
      Name: "",
      Body: [
        {
          Type: "SchnelleEinstellung",
          Body: "Schnell Gang",
          Line: 3073
        }
      ],
      Line: 3073
    },
    {
      Name: "Regie",
      Body: [
        {
          Type: "Text",
          Body: "Cherubin verschwindet hinter der Bühne. ",
          Line: 3076
        }
      ],
      Line: 3075
    },
    {
      Name: "SUSANNE",
      Body: [
        {
          Type: "Text",
          Body: "Er hat's geschafft. ",
          Line: 3080
        }
      ],
      Line: 3079
    },
    {
      Name: "",
      Body: [
        {
          Type: "LangsameEinstellung",
          Body: "Es wird langsam hell",
          Line: 3083
        }
      ],
      Line: 3083
    },
    {
      Name: "SUSANNE",
      Body: [
        {
          Type: "Text",
          Body: "So ein mutiger Kerl. Herr Graf, jetzt können Sie die Garderobe stürmen! ",
          Line: 3086
        }
      ],
      Line: 3085
    },
    {
      Name: "Regie",
      Body: [
        {
          Type: "Text",
          Body: "Susanne verschwindet in der Garderobe. Der Diener, Graf und Gräfin treten auf. ",
          Line: 3091
        }
      ],
      Line: 3090
    },
    {
      Name: "",
      Body: [
        {
          Type: "Einstellung",
          Body: "Voll Hell",
          Line: 3095
        }
      ],
      Line: 3095
    },
    {
      Name: "DIENER",
      Body: [
        {
          Type: "Text",
          Body: "... Herr über zweihundert Rinder und Mägde. Großcomptur von ... ",
          Line: 3098
        }
      ],
      Line: 3097
    },
    {
      Name: "GRAF",
      Body: [
        {
          Type: "Text",
          Body: "Sie bleiben also bei Ihrer Weigerung, die Tür freiwillig zu öffnen? ",
          Line: 3102
        }
      ],
      Line: 3101
    },
    {
      Name: "GREFIN",
      Body: [
        {
          Type: "Text",
          Body: "Sie bleiben also bei Ihrer Zumutung, mit Gewalt einzudringen? ",
          Line: 3106
        }
      ],
      Line: 3105
    },
    {
      Name: "",
      Body: [
        {
          Type: "Seite",
          Body: "41",
          Line: 3111
        }
      ],
      Line: 3111
    },
    {
      Name: "GRAF",
      Body: [
        {
          Type: "Regie",
          Body: "zum Diener",
          Line: 3115
        }
      ],
      Line: 3114
    },
    {
      Name: "",
      Body: [
        {
          Type: "Text",
          Body: "Vorwärts, Brecheisen. Tritt die Tür ein. ",
          Line: 3115
        }
      ],
      Line: 3115
    },
    {
      Name: "Regie",
      Body: [
        {
          Type: "Text",
          Body: "Der Diener neigt den Kopf und will gegen die Tür anrennen. ",
          Line: 3119
        }
      ],
      Line: 3118
    },
    {
      Name: "DIENER",
      Body: [
        {
          Type: "Text",
          Body: "Seine Exzellenz, der besonders wohlgeborene Graf... ",
          Line: 3123
        }
      ],
      Line: 3122
    },
    {
      Name: "GREFIN",
      Body: [
        {
          Type: "Text",
          Body: "Halt, Herr Graf. Hinter dieser Tür befindet sich Susanne. So glauben Sie mir doch. ",
          Line: 3127
        }
      ],
      Line: 3126
    },
    {
      Name: "GRAF",
      Body: [
        {
          Type: "Text",
          Body: "Warum so aufgeregt, Frau Gräfin? ",
          Line: 3132
        }
      ],
      Line: 3131
    },
    {
      Name: "GREFIN",
      Body: [
        {
          Type: "Text",
          Body: "Susanne wirkt vielleicht etwas verändert. ",
          Line: 3136
        }
      ],
      Line: 3135
    },
    {
      Name: "GRAF",
      Body: [
        {
          Type: "Text",
          Body: "So, so. Verändert. ",
          Line: 3140
        }
      ],
      Line: 3139
    },
    {
      Name: "GREFIN",
      Body: [
        {
          Type: "Text",
          Body: "Doch, doch. Etwas herber als sonst. ",
          Line: 3144
        }
      ],
      Line: 3143
    },
    {
      Name: "GRAF",
      Body: [
        {
          Type: "Text",
          Body: "So, so. Herb. ",
          Line: 3148
        }
      ],
      Line: 3147
    },
    {
      Name: "GREFIN",
      Body: [
        {
          Type: "Text",
          Body: "Doch, doch. Vielleicht scheinen Ihnen ihre Schultern etwas breiter ... ",
          Line: 3152
        }
      ],
      Line: 3151
    },
    {
      Name: "GRAF",
      Body: [
        {
          Type: "Text",
          Body: "So, so. Breite Schultern. ",
          Line: 3156
        }
      ],
      Line: 3155
    },
    {
      Name: "GREFIN",
      Body: [
        {
          Type: "Text",
          Body: "... und ihre Stimme etwas tiefer als üblich ... ",
          Line: 3160
        }
      ],
      Line: 3159
    },
    {
      Name: "GRAF",
      Body: [
        {
          Type: "Text",
          Body: "So, so. Tiefe Stimme. Das ist die Beschreibung eines Mannes, Madame. Vorwärts, Brecheisen. ",
          Line: 3164
        }
      ],
      Line: 3163
    },
    {
      Name: "GREFIN",
      Body: [
        {
          Type: "Text",
          Body: "Halt. Dieser Mann ist eine Frau. Ich meine, diese Frau ist ein Mann. ",
          Line: 3169
        }
      ],
      Line: 3168
    },
    {
      Name: "GRAF",
      Body: [
        {
          Type: "Text",
          Body: "Was reden Sie? ",
          Line: 3174
        }
      ],
      Line: 3173
    },
    {
      Name: "GREFIN",
      Body: [
        {
          Type: "Text",
          Body: "Schonen Sie ihn! Er ist unschuldig! ",
          Line: 3178
        }
      ],
      Line: 3177
    },
    {
      Name: "GRAF",
      Body: [
        {
          Type: "Text",
          Body: "Also doch! Vorwärts, Brecheisen! ",
          Line: 3182
        }
      ],
      Line: 3181
    },
    {
      Name: "Regie",
      Body: [
        {
          Type: "Text",
          Body: "Der Diener läuft - mit dem Kopf voran - gegen die Tapetentür. Susanne öffnet sie von innen. Der Diener läuft durch und kracht gegen einen Kasten in der Garderobe. Stille. Der Diener wankt aus der Garderobe. ",
          Line: 3186
        }
      ],
      Line: 3185
    },
    {
      Name: "GRAF",
      Body: [
        {
          Type: "Text",
          Body: "Nun? Wer ist im Zimmer?! ",
          Line: 3193
        }
      ],
      Line: 3192
    },
    {
      Name: "DIENER",
      Body: [
        {
          Type: "Regie",
          Body: "wie betrunken",
          Line: 3197
        }
      ],
      Line: 3196
    },
    {
      Name: "",
      Body: [
        {
          Type: "Text",
          Body: "Seine Exzellenz, der besonders wohlgeborene Graf von Almaviva, Herr über ... ",
          Line: 3197
        }
      ],
      Line: 3197
    },
    {
      Name: "Regie",
      Body: [
        {
          Type: "Text",
          Body: "Der Diener fällt um und torkelt ab.",
          Line: 3199
        }
      ],
      Line: 3199
    },
    {
      Name: "",
      Body: [],
      Line: 3200
    },
    {
      Name: "GRAF",
      Body: [
        {
          Type: "Text",
          Body: "Trottel! ",
          Line: 3203
        }
      ],
      Line: 3202
    },
    {
      Name: "SUSANNE",
      Body: [
        {
          Type: "Regie",
          Body: "kommt trällernd aus der Garderobe",
          Line: 3207
        }
      ],
      Line: 3206
    },
    {
      Name: "",
      Body: [],
      Line: 3208
    },
    {
      Name: "GRAF",
      Body: [
        {
          Type: "Text",
          Body: "Susanne? ",
          Line: 3211
        }
      ],
      Line: 3210
    },
    {
      Name: "",
      Body: [
        {
          Type: "Seite",
          Body: "42",
          Line: 3216
        }
      ],
      Line: 3216
    },
    {
      Name: "GREFIN",
      Body: [
        {
          Type: "Text",
          Body: "Susanne? ",
          Line: 3220
        }
      ],
      Line: 3219
    },
    {
      Name: "SUSANNE",
      Body: [
        {
          Type: "Regie",
          Body: "mit einem Blick auf den Diener",
          Line: 3224
        }
      ],
      Line: 3223
    },
    {
      Name: "",
      Body: [
        {
          Type: "Text",
          Body: "Mit Verlaub, Herr Graf, aber Ihr solltet Eure Diener etwas vorsichtiger durch die Gegend werfen. ",
          Line: 3224
        }
      ],
      Line: 3224
    },
    {
      Name: "GRAF",
      Body: [
        {
          Type: "Regie",
          Body: "stürzt in die Garderobe",
          Line: 3230
        }
      ],
      Line: 3229
    },
    {
      Name: "",
      Body: [
        {
          Type: "Text",
          Body: "Hier muß noch jemand versteckt sein. ",
          Line: 3230
        }
      ],
      Line: 3230
    },
    {
      Name: "SUSANNE",
      Body: [
        {
          Type: "Regie",
          Body: "zur Gräfin, leise",
          Line: 3234
        }
      ],
      Line: 3233
    },
    {
      Name: "",
      Body: [
        {
          Type: "Text",
          Body: "Keine Angst, Frau Gräfin, Cherubin ist aus dem Fenster gesprungen. ",
          Line: 3234
        }
      ],
      Line: 3234
    },
    {
      Name: "GREFIN",
      Body: [
        {
          Type: "Text",
          Body: "Ave Maria, ich danke dir. Mir fällt ein Diamant vom Hals. ",
          Line: 3239
        }
      ],
      Line: 3238
    },
    {
      Name: "GRAF",
      Body: [
        {
          Type: "Regie",
          Body: "Der Graf kommt aus der Garderobe.",
          Line: 3243
        }
      ],
      Line: 3242
    },
    {
      Name: "",
      Body: [
        {
          Type: "Text",
          Body: "Nichts! Nichts als Mode! ",
          Line: 3244
        }
      ],
      Line: 3244
    },
    {
      Name: "Regie",
      Body: [
        {
          Type: "Text",
          Body: "Zur Gräfin",
          Line: 3244
        }
      ],
      Line: 3244
    },
    {
      Name: "",
      Body: [
        {
          Type: "Text",
          Body: "Aber Sie selbst sagten doch ... ",
          Line: 3244
        }
      ],
      Line: 3244
    },
    {
      Name: "GREFIN",
      Body: [
        {
          Type: "Text",
          Body: "... daß Sie zu weit gegangen sind, mein Herr. ",
          Line: 3248
        }
      ],
      Line: 3247
    },
    {
      Name: "GRAF",
      Body: [
        {
          Type: "Text",
          Body: "Ihre Weigerung, die Tür zu öffnen ... die männliche Stimme ... die breiten Schultern ... ich hatte Grund zur Annahme ... ",
          Line: 3252
        }
      ],
      Line: 3251
    },
    {
      Name: "GREFIN",
      Body: [
        {
          Type: "Text",
          Body: "Sie haben Grund, sich zu entschuldigen. Aber ich werde diese Entschuldigung nicht annehmen. ",
          Line: 3257
        }
      ],
      Line: 3256
    },
    {
      Name: "GRAF",
      Body: [
        {
          Type: "Text",
          Body: "Madame, ich bitte Sie. Machen Sie keinen Skandal. Die Sache ist mir selbst sehr peinlich. ",
          Line: 3262
        }
      ],
      Line: 3261
    },
    {
      Name: "GREFIN",
      Body: [
        {
          Type: "Text",
          Body: "Es ist Ihnen peinlich? ",
          Line: 3267
        }
      ],
      Line: 3266
    },
    {
      Name: "GRAF",
      Body: [
        {
          Type: "Text",
          Body: "Es tut mir leid. ",
          Line: 3271
        }
      ],
      Line: 3270
    },
    {
      Name: "GREFIN",
      Body: [
        {
          Type: "Text",
          Body: "Wie leid, Herr Graf? Werden Sie in Zukunft weniger an Ihre Eitelkeit und mehr an mich denken? ",
          Line: 3275
        }
      ],
      Line: 3274
    },
    {
      Name: "GRAF",
      Body: [
        {
          Type: "Text",
          Body: "Habe ich jemals meine Pflicht... ",
          Line: 3280
        }
      ],
      Line: 3279
    },
    {
      Name: "GREFIN",
      Body: [
        {
          Type: "Text",
          Body: "Von Ihrer Neigung rede ich und nicht von Ihrer Pflicht, mein Gemahl. ",
          Line: 3284
        }
      ],
      Line: 3283
    },
    {
      Name: "GRAF",
      Body: [
        {
          Type: "Text",
          Body: "Müssen Sie ausgerechnet jetzt solche privaten ... ",
          Line: 3289
        }
      ],
      Line: 3288
    },
    {
      Name: "Regie",
      Body: [
        {
          Type: "Text",
          Body: "Es klopft. ",
          Line: 3293
        }
      ],
      Line: 3292
    },
    {
      Name: "FIGARO",
      Body: [
        {
          Type: "Regie",
          Body: "von draußen",
          Line: 3297
        }
      ],
      Line: 3296
    },
    {
      Name: "",
      Body: [
        {
          Type: "Text",
          Body: "Ist alles vorbereitet, meine Damen? ",
          Line: 3297
        }
      ],
      Line: 3297
    },
    {
      Name: "Regie",
      Body: [
        {
          Type: "Text",
          Body: "Der Graf reißt die Tür auf. Figaro erblickt den Grafen. ",
          Line: 3301
        }
      ],
      Line: 3300
    },
    {
      Name: "GRAF",
      Body: [
        {
          Type: "Text",
          Body: "Was soll vorbereitet sein? ",
          Line: 3305
        }
      ],
      Line: 3304
    },
    {
      Name: "FIGARO",
      Body: [
        {
          Type: "Text",
          Body: "Oh, was muß nicht alles vorbereitet werden für eine Hochzeit? Die Kleidchen und Maidchen, die Grübchen und Zübchen, die Bänder und Fänder ... ",
          Line: 3309
        }
      ],
      Line: 3308
    },
    {
      Name: "",
      Body: [
        {
          Type: "Seite",
          Body: "43",
          Line: 3316
        }
      ],
      Line: 3316
    },
    {
      Name: "GRAF",
      Body: [
        {
          Type: "Text",
          Body: "Schwätzer! Was hast du in diesem Zimmer zu suchen? ",
          Line: 3320
        }
      ],
      Line: 3319
    },
    {
      Name: "FIGARO",
      Body: [
        {
          Type: "Text",
          Body: "Oh, was sollte ein Bräutigam am Tage seiner Hochzeit anderes suchen als seine Braut? Susanne geht in jenes Zimmer, tandaradei, ich hinterher. Susanne geht in dieses Gemach, tandaradei, ich nach. Das Glück, Herr Graf, hat mich ganz tandaradei gemacht. ",
          Line: 3324
        }
      ],
      Line: 3323
    },
    {
      Name: "GRAF",
      Body: [
        {
          Type: "Text",
          Body: "Schwätzer! ",
          Line: 3332
        }
      ],
      Line: 3331
    },
    {
      Name: "GREFIN",
      Body: [
        {
          Type: "Text",
          Body: "Der Arme ist ganz durcheinander, mein Gemahl. Eröffnen Sie endlich die Zeremonie. Die Hochzeit soll ihren Lauf nehmen. ",
          Line: 3336
        }
      ],
      Line: 3335
    },
    {
      Name: "GRAF",
      Body: [
        {
          Type: "Text",
          Body: "Ich verfüge ... ",
          Line: 3342
        },
        {
          Type: "Regie",
          Body: "für sich",
          Line: 3342
        }
      ],
      Line: 3341
    },
    {
      Name: "",
      Body: [
        {
          Type: "Text",
          Body: "... Zeit gewinnen, Marcelline muß jeden Moment hier sein ... ich verfüge ... ",
          Line: 3342
        }
      ],
      Line: 3342
    },
    {
      Name: "Regie",
      Body: [
        {
          Type: "Text",
          Body: "Es klopft. ",
          Line: 3347
        }
      ],
      Line: 3346
    },
    {
      Name: "GRAF",
      Body: [
        {
          Type: "Regie",
          Body: "für sich",
          Line: 3351
        }
      ],
      Line: 3350
    },
    {
      Name: "",
      Body: [
        {
          Type: "Text",
          Body: "Das ist sie! ",
          Line: 3351
        }
      ],
      Line: 3351
    },
    {
      Name: "Regie",
      Body: [
        {
          Type: "Text",
          Body: "laut",
          Line: 3351
        }
      ],
      Line: 3351
    },
    {
      Name: "",
      Body: [
        {
          Type: "Text",
          Body: "Herein! ",
          Line: 3351
        }
      ],
      Line: 3351
    },
    {
      Name: "Regie",
      Body: [
        {
          Type: "Text",
          Body: "Antonio, der Gärtner, reißt die Tür auf. Antonio ist betrunken und hat die Perücke Cherubins auf. ",
          Line: 3355
        }
      ],
      Line: 3354
    },
    {
      Name: "ANTONIO",
      Body: [
        {
          Type: "Text",
          Body: "Everybody okay? Ein Vivat der Gemütlichkeit! ",
          Line: 3360
        }
      ],
      Line: 3359
    },
    {
      Name: "GRAF",
      Body: [
        {
          Type: "Text",
          Body: "Der Kerl ist von Sinnen! ",
          Line: 3364
        }
      ],
      Line: 3363
    },
    {
      Name: "ANTONIO",
      Body: [
        {
          Type: "Text",
          Body: "Antonio, mein Beruf. Gärtner, mein Name. Von hinnen und doch nicht von Sinnen. Prost, Frau Gräfin, Prostata, Herr Graf. ",
          Line: 3368
        }
      ],
      Line: 3367
    },
    {
      Name: "GRAF",
      Body: [
        {
          Type: "Text",
          Body: "Abführen! ",
          Line: 3374
        }
      ],
      Line: 3373
    },
    {
      Name: "ANTONIO",
      Body: [
        {
          Type: "Regie",
          Body: "singt",
          Line: 3378
        }
      ],
      Line: 3377
    },
    {
      Name: "",
      Body: [
        {
          Type: "Text",
          Body: "Ein Vivat der Gemütlichkeit! ",
          Line: 3378
        }
      ],
      Line: 3378
    },
    {
      Name: "GRAF",
      Body: [
        {
          Type: "Text",
          Body: "So was ist mir noch nicht vorgekommen! ",
          Line: 3382
        }
      ],
      Line: 3381
    },
    {
      Name: "",
      Body: [
        {
          Type: "Seite",
          Body: "44",
          Line: 3387
        }
      ],
      Line: 3387
    },
    {
      Name: "ANTONIO",
      Body: [
        {
          Type: "Text",
          Body: "Nichttrinker, was? Die Diener zum Fenster hinauswerfen, aber den Alkohol meiden, das hat man gerne. Ich sage immer, Antonio sage ich, du sollst Grafen und Mütter ehren ... ",
          Line: 3391
        }
      ],
      Line: 3390
    },
    {
      Name: "GRAF",
      Body: [
        {
          Type: "Text",
          Body: "Schluß, sage ich! ",
          Line: 3398
        }
      ],
      Line: 3397
    },
    {
      Name: "ANTONIO",
      Body: [
        {
          Type: "Text",
          Body: "Jawohl, Schluß! ",
          Line: 3402
        },
        {
          Type: "Regie",
          Body: "Geht zum Fenster.",
          Line: 3402
        }
      ],
      Line: 3401
    },
    {
      Name: "",
      Body: [
        {
          Type: "Text",
          Body: "Wenn der Kerl ins Unkraut gefallen wäre, bitte, aber sechzehn junge unschuldige Tulpen mit einem Schlag ... platsch, ausgelöscht! ",
          Line: 3402
        }
      ],
      Line: 3402
    },
    {
      Name: "GRAF",
      Body: [
        {
          Type: "Text",
          Body: "Was redet der Trunkenbold?! ",
          Line: 3408
        }
      ],
      Line: 3407
    },
    {
      Name: "ANTONIO",
      Body: [
        {
          Type: "Text",
          Body: "Du kaltes Herz, fühlst du nicht des Gärtners Schmerz? Was für eine eiskalte Einstellung zum Grünzeug! O Mensch, o Graf! ",
          Line: 3412
        }
      ],
      Line: 3411
    },
    {
      Name: "GRAF",
      Body: [
        {
          Type: "Text",
          Body: "Hinaus! ",
          Line: 3417
        }
      ],
      Line: 3416
    },
    {
      Name: "ANTONIO",
      Body: [
        {
          Type: "Text",
          Body: "Demnächst! Gestatten Sie, daß ich vorher noch einen letzten tragischen Blick auf die jungen Leichen werfe? ",
          Line: 3421
        }
      ],
      Line: 3420
    },
    {
      Name: "GRAF",
      Body: [
        {
          Type: "Regie",
          Body: "Der Graf läuft zum Fenster und schaut in den Garten.",
          Line: 3426
        }
      ],
      Line: 3425
    },
    {
      Name: "",
      Body: [
        {
          Type: "Text",
          Body: "Wer hat die Blumen unter diesem Fenster zerstört? ",
          Line: 3427
        }
      ],
      Line: 3427
    },
    {
      Name: "ANTONIO",
      Body: [
        {
          Type: "Text",
          Body: "Jetzt fragst du doch, warum mein Herz sich bang in meinem Busen klemmt? Erschüttert, was? ",
          Line: 3431
        }
      ],
      Line: 3430
    },
    {
      Name: "GRAF",
      Body: [
        {
          Type: "Text",
          Body: "Aus dem ist nichts rauszubringen. ",
          Line: 3436
        },
        {
          Type: "Regie",
          Body: "Zu Susanne",
          Line: 3436
        }
      ],
      Line: 3435
    },
    {
      Name: "",
      Body: [
        {
          Type: "Text",
          Body: "Was ist hier hinuntergefallen, Susanne? ",
          Line: 3436
        }
      ],
      Line: 3436
    },
    {
      Name: "ANTONIO",
      Body: [
        {
          Type: "Text",
          Body: "Ich bin zuständig. Es war eine Dame in Frauenkleidern ... vielmehr ein Herr in Damenkleidern ... vielmehr ... ",
          Line: 3441
        }
      ],
      Line: 3440
    },
    {
      Name: "SUSANNE",
      Body: [
        {
          Type: "Text",
          Body: "Jetzt wird's brenzlig. ",
          Line: 3446
        }
      ],
      Line: 3445
    },
    {
      Name: "FIGARO",
      Body: [
        {
          Type: "Text",
          Body: "Glaubt kein Wort, Herr Graf. ",
          Line: 3450
        },
        {
          Type: "Regie",
          Body: "Zu Antonio",
          Line: 3450
        }
      ],
      Line: 3449
    },
    {
      Name: "",
      Body: [
        {
          Type: "Text",
          Body: "Antonio, wieviel ist drei mal drei? ",
          Line: 3451
        }
      ],
      Line: 3451
    },
    {
      Name: "ANTONIO",
      Body: [
        {
          Type: "Text",
          Body: "Siebzehn ... siebzehn und vier. ",
          Line: 3455
        }
      ],
      Line: 3454
    },
    {
      Name: "FIGARO",
      Body: [
        {
          Type: "Text",
          Body: "Ihr seht, Herr Graf, total besoffen! ",
          Line: 3459
        }
      ],
      Line: 3458
    },
    {
      Name: "GRAF",
      Body: [
        {
          Type: "Text",
          Body: "Aber der zerstörte Garten ... ",
          Line: 3463
        }
      ],
      Line: 3462
    },
    {
      Name: "FIGARO",
      Body: [
        {
          Type: "Text",
          Body: "Eine Ente, Herr Graf. ",
          Line: 3467
        }
      ],
      Line: 3466
    },
    {
      Name: "GRAF",
      Body: [
        {
          Type: "Text",
          Body: "Eine Ente? ",
          Line: 3471
        }
      ],
      Line: 3470
    },
    {
      Name: "FIGARO",
      Body: [
        {
          Type: "Text",
          Body: "Ja, eine dicke Ente. ",
          Line: 3475
        }
      ],
      Line: 3474
    },
    {
      Name: "",
      Body: [
        {
          Type: "Seite",
          Body: "45",
          Line: 3480
        }
      ],
      Line: 3480
    },
    {
      Name: "GRAF",
      Body: [
        {
          Type: "Text",
          Body: "Eine dicke Ente? ",
          Line: 3484
        }
      ],
      Line: 3483
    },
    {
      Name: "FIGARO",
      Body: [
        {
          Type: "Text",
          Body: "Ja, fast ein Geier. ",
          Line: 3488
        }
      ],
      Line: 3487
    },
    {
      Name: "GRAF",
      Body: [
        {
          Type: "Text",
          Body: "Fast ein Geier? ",
          Line: 3492
        }
      ],
      Line: 3491
    },
    {
      Name: "FIGARO",
      Body: [
        {
          Type: "Text",
          Body: "Abgestürzt! ",
          Line: 3496
        }
      ],
      Line: 3495
    },
    {
      Name: "GRAF",
      Body: [
        {
          Type: "Text",
          Body: "Abgestürzt? ",
          Line: 3500
        }
      ],
      Line: 3499
    },
    {
      Name: "FIGARO",
      Body: [
        {
          Type: "Text",
          Body: "Ja. Schrecklich, was? ",
          Line: 3504
        }
      ],
      Line: 3503
    },
    {
      Name: "ANTONIO",
      Body: [
        {
          Type: "Text",
          Body: "Halt! Ein Geier mit Perücke? Wohl besoffen, Herr Figaro? Hier, geben Sie Ihrem Geier seine Haare wieder. ",
          Line: 3508
        },
        {
          Type: "Regie",
          Body: "er gibt Figaro die Perücke",
          Line: 3510
        }
      ],
      Line: 3507
    },
    {
      Name: "",
      Body: [
        {
          Type: "Text",
          Body: "Und sagen Sie dem Vogel einen schönen Gruß, und wenn er noch einmal... ",
          Line: 3511
        }
      ],
      Line: 3511
    },
    {
      Name: "GRAF",
      Body: [
        {
          Type: "Text",
          Body: "Wem gehört diese Perücke? ",
          Line: 3516
        }
      ],
      Line: 3515
    },
    {
      Name: "GREFIN",
      Body: [
        {
          Type: "Text",
          Body: "Sie gehört mir, mein Gemahl. Die Sache ist schnell aufgeklärt. Ich war ihrer überdrüssig und warf sie zum Fenster hinaus. ",
          Line: 3520
        }
      ],
      Line: 3519
    },
    {
      Name: "GRAF",
      Body: [
        {
          Type: "Text",
          Body: "Eine Perücke zerstört noch keinen Garten, Frau Gräfin. ",
          Line: 3526
        }
      ],
      Line: 3525
    },
    {
      Name: "FIGARO",
      Body: [
        {
          Type: "Text",
          Body: "Aber ein betrunkener Gärtner, Herr Graf. ",
          Line: 3530
        }
      ],
      Line: 3529
    },
    {
      Name: "ANTONIO",
      Body: [
        {
          Type: "Text",
          Body: "Ich verbitte mir diese Anspielungen auf meine unschuldige Person. Skandalös! ",
          Line: 3534
        }
      ],
      Line: 3533
    },
    {
      Name: "GRAF",
      Body: [
        {
          Type: "Text",
          Body: "Was willst du damit sagen, Figaro? ",
          Line: 3539
        }
      ],
      Line: 3538
    },
    {
      Name: "FIGARO",
      Body: [
        {
          Type: "Text",
          Body: "Daß alles logisch ist, Herr Graf. Die Frau Gräfin hat die Perücke in den Garten geworfen, der Gärtner hat sie dort gefunden. In seiner Trunkenheit hat er dabei die Blumen zertreten. ",
          Line: 3543
        }
      ],
      Line: 3542
    },
    {
      Name: "ANTONIO",
      Body: [
        {
          Type: "Text",
          Body: "Der lügt schneller, als ich denken kann. ",
          Line: 3550
        }
      ],
      Line: 3549
    },
    {
      Name: "GRAF",
      Body: [
        {
          Type: "Regie",
          Body: "zu Figaro",
          Line: 3554
        }
      ],
      Line: 3553
    },
    {
      Name: "",
      Body: [
        {
          Type: "Text",
          Body: "Sagtest du nicht vorher etwas von einem Geier? ",
          Line: 3554
        }
      ],
      Line: 3554
    },
    {
      Name: "FIGARO",
      Body: [
        {
          Type: "Text",
          Body: "Ein Geier, Herr Graf? ",
          Line: 3558
        }
      ],
      Line: 3557
    },
    {
      Name: "GRAF",
      Body: [
        {
          Type: "Text",
          Body: "Ja, eine Ente! ",
          Line: 3562
        }
      ],
      Line: 3561
    },
    {
      Name: "FIGARO",
      Body: [
        {
          Type: "Text",
          Body: "Eine Ente? ",
          Line: 3566
        }
      ],
      Line: 3565
    },
    {
      Name: "GRAF",
      Body: [
        {
          Type: "Text",
          Body: "Ja, eine dicke Ente! ",
          Line: 3570
        }
      ],
      Line: 3569
    },
    {
      Name: "FIGARO",
      Body: [
        {
          Type: "Text",
          Body: "Eine dicke Ente? ",
          Line: 3574
        }
      ],
      Line: 3573
    },
    {
      Name: "GRAF",
      Body: [
        {
          Type: "Text",
          Body: "Abgestürzt! ",
          Line: 3578
        }
      ],
      Line: 3577
    },
    {
      Name: "FIGARO",
      Body: [
        {
          Type: "Text",
          Body: "Abgestürzt? ",
          Line: 3582
        }
      ],
      Line: 3581
    },
    {
      Name: "GRAF",
      Body: [
        {
          Type: "Text",
          Body: "Mein lieber Schwan! ",
          Line: 3586
        }
      ],
      Line: 3585
    },
    {
      Name: "",
      Body: [
        {
          Type: "Seite",
          Body: "46",
          Line: 3591
        }
      ],
      Line: 3591
    },
    {
      Name: "ANTONIO",
      Body: [
        {
          Type: "Text",
          Body: "Halt! Ein abgestürzter Schwan? Das geht zu weit. Hier sind ja alle betrunken. ",
          Line: 3595
        }
      ],
      Line: 3594
    },
    {
      Name: "ANTONIO",
      Body: [
        {
          Type: "Text",
          Body: "Komm Antonio, meiden wir diesen Ort der Verwirrung ... ein Geier mit Perücke ... eine abgestürzte Ente ... schrecklich, was die Leute in ihrem Rausch zusammenreden ... Antonio, sage ich immer ... nie über den Durst trinken ... nobody is perfect. ",
          Line: 3600
        }
      ],
      Line: 3599
    },
    {
      Name: "Regie",
      Body: [
        {
          Type: "Text",
          Body: "Antonio und der Diener torkeln ab. ",
          Line: 3608
        }
      ],
      Line: 3607
    },
    {
      Name: "GRAF",
      Body: [
        {
          Type: "Text",
          Body: "Der Kerl wird bestraft. Aufs ärgste. ",
          Line: 3612
        }
      ],
      Line: 3611
    },
    {
      Name: "GREFIN",
      Body: [
        {
          Type: "Text",
          Body: "Nach der Hochzeit, mein Gemahl. Geben Sie endlich Ihre Zustimmung. ",
          Line: 3616
        }
      ],
      Line: 3615
    },
    {
      Name: "Regie",
      Body: [
        {
          Type: "Text",
          Body: "Figaro und Susanne knien schnell vor dem Grafen nieder. ",
          Line: 3620
        }
      ],
      Line: 3619
    },
    {
      Name: "GRAF",
      Body: [
        {
          Type: "Text",
          Body: "Ich verfüge ... ",
          Line: 3624
        }
      ],
      Line: 3623
    },
    {
      Name: "FIGARO",
      Body: [
        {
          Type: "Text",
          Body: "Meine Susanne! ",
          Line: 3628
        }
      ],
      Line: 3627
    },
    {
      Name: "SUSANNE",
      Body: [
        {
          Type: "Text",
          Body: "Mein Figaro! ",
          Line: 3632
        }
      ],
      Line: 3631
    },
    {
      Name: "Regie",
      Body: [
        {
          Type: "Text",
          Body: "Es klopft. ",
          Line: 3636
        }
      ],
      Line: 3635
    },
    {
      Name: "FIGARO",
      Body: [
        {
          Type: "Text",
          Body: "Wieder nichts! Diese Komödie ist eine Tragödie. ",
          Line: 3640
        }
      ],
      Line: 3639
    },
    {
      Name: "Regie",
      Body: [
        {
          Type: "Text",
          Body: "Bazillus tritt ein und schleicht auf den Grafen zu. ",
          Line: 3644
        }
      ],
      Line: 3643
    },
    {
      Name: "BAZILLUS",
      Body: [
        {
          Type: "Regie",
          Body: "leise zum Grafen",
          Line: 3648
        }
      ],
      Line: 3647
    },
    {
      Name: "",
      Body: [
        {
          Type: "Text",
          Body: "Die Intrige ist soeben eingetroffen. ",
          Line: 3648
        }
      ],
      Line: 3648
    },
    {
      Name: "GRAF",
      Body: [
        {
          Type: "Text",
          Body: "Bestens! ",
          Line: 3652
        },
        {
          Type: "Regie",
          Body: "laut",
          Line: 3652
        }
      ],
      Line: 3651
    },
    {
      Name: "",
      Body: [
        {
          Type: "Text",
          Body: "Treten Sie näher, Marcelline! ",
          Line: 3652
        }
      ],
      Line: 3652
    },
    {
      Name: "MARCELLINE",
      Body: [
        {
          Type: "Regie",
          Body: "auf",
          Line: 3656
        }
      ],
      Line: 3655
    },
    {
      Name: "",
      Body: [],
      Line: 3657
    },
    {
      Name: "SUSANNE",
      Body: [
        {
          Type: "Text",
          Body: "Die Großmutter! ",
          Line: 3660
        }
      ],
      Line: 3659
    },
    {
      Name: "FIGARO",
      Body: [
        {
          Type: "Text",
          Body: "Jetzt wird's gefährlich ... ",
          Line: 3664
        }
      ],
      Line: 3663
    },
    {
      Name: "GRAF",
      Body: [
        {
          Type: "Text",
          Body: "Liebe Marcelline! Haben Sie etwas gegen die Verbindung meines Dieners Figaro mit der Zofe Susanne vorzubringen? ",
          Line: 3668
        }
      ],
      Line: 3667
    },
    {
      Name: "MARCELLINE",
      Body: [
        {
          Type: "Text",
          Body: "Ich habe, Herr Graf. ",
          Line: 3674
        }
      ],
      Line: 3673
    },
    {
      Name: "GRAF",
      Body: [
        {
          Type: "Regie",
          Body: "zu Bazillus",
          Line: 3678
        }
      ],
      Line: 3677
    },
    {
      Name: "",
      Body: [
        {
          Type: "Text",
          Body: "Erstklassige Arbeit, Schurkenkopf. ",
          Line: 3678
        }
      ],
      Line: 3678
    },
    {
      Name: "BAZILLUS",
      Body: [
        {
          Type: "Text",
          Body: "Wenn Sie die kurzen Liefertermine bedenken ... ",
          Line: 3682
        }
      ],
      Line: 3681
    },
    {
      Name: "GRAF",
      Body: [
        {
          Type: "Text",
          Body: "Bringen Sie vor, Marcelline. ",
          Line: 3686
        }
      ],
      Line: 3685
    },
    {
      Name: "MARCELLINE",
      Body: [
        {
          Type: "Regie",
          Body: "zeigt auf Figaro",
          Line: 3690
        }
      ],
      Line: 3689
    },
    {
      Name: "",
      Body: [
        {
          Type: "Text",
          Body: "Ich habe diesem Herrn dreihundert Goldstücke geborgt. ",
          Line: 3690
        }
      ],
      Line: 3690
    },
    {
      Name: "",
      Body: [
        {
          Type: "TextTeilEnde",
          Body: "TextTeilAnfang",
          Line: 3694
        },
        {
          Type: "TextTeilAnfang",
          Body: "Seite",
          Line: 3695
        },
        {
          Type: "Seite",
          Body: "47",
          Line: 3698
        }
      ],
      Line: 3694
    },
    {
      Name: "FIGARO",
      Body: [
        {
          Type: "Text",
          Body: "Ich weiß. ",
          Line: 3702
        }
      ],
      Line: 3701
    },
    {
      Name: "MARCELLINE",
      Body: [
        {
          Type: "Text",
          Body: "Unter der Bedingung ... ",
          Line: 3706
        }
      ],
      Line: 3705
    },
    {
      Name: "FIGARO",
      Body: [
        {
          Type: "Text",
          Body: "Ich weiß nicht ... ",
          Line: 3710
        }
      ],
      Line: 3709
    },
    {
      Name: "MARCELLINE",
      Body: [
        {
          Type: "Text",
          Body: "Mich zu heiraten. ",
          Line: 3714
        }
      ],
      Line: 3713
    },
    {
      Name: "FIGARO",
      Body: [
        {
          Type: "Text",
          Body: "Keine Ahnung. Herr Graf, es stimmt, diese Dame hat mir dreihundert Goldstücke geborgt. ",
          Line: 3718
        }
      ],
      Line: 3717
    },
    {
      Name: "GRAF",
      Body: [
        {
          Type: "Text",
          Body: "Unter der Bedingung? ",
          Line: 3723
        }
      ],
      Line: 3722
    },
    {
      Name: "FIGARO",
      Body: [
        {
          Type: "Text",
          Body: "Sie wieder zurückzugeben. Ein ganz normaler Handel. ",
          Line: 3727
        }
      ],
      Line: 3726
    },
    {
      Name: "MARCELLINE",
      Body: [
        {
          Type: "Text",
          Body: "Er lügt, Herr Graf. Ich habe ein Anrecht... ",
          Line: 3731
        }
      ],
      Line: 3730
    },
    {
      Name: "FIGARO",
      Body: [
        {
          Type: "Text",
          Body: "Auf dreihundert Goldstücke. ",
          Line: 3735
        }
      ],
      Line: 3734
    },
    {
      Name: "MARCELLINE",
      Body: [
        {
          Type: "Text",
          Body: "Auf dich, Figaro! Ich werde dir immer eine liebende Frau und deinen Kindern eine gute Mutter sein. ",
          Line: 3739
        }
      ],
      Line: 3738
    },
    {
      Name: "SUSANNE",
      Body: [
        {
          Type: "Text",
          Body: "Direkt hemmungslos, diese Person. ",
          Line: 3744
        }
      ],
      Line: 3743
    },
    {
      Name: "FIGARO",
      Body: [
        {
          Type: "Text",
          Body: "Nie, Herr Graf, habe ich derartiges ... ",
          Line: 3748
        }
      ],
      Line: 3747
    },
    {
      Name: "GRAF",
      Body: [
        {
          Type: "Text",
          Body: "Wie dem auch sei, die Sache gehört vor ein ordentliches Gericht. Die Hochzeit ist bis auf weiteres verschoben. Ich übernehme den Vorsitz der Verhandlung. ",
          Line: 3752
        },
        {
          Type: "Regie",
          Body: "zu Bazillus",
          Line: 3755
        }
      ],
      Line: 3751
    },
    {
      Name: "",
      Body: [
        {
          Type: "Text",
          Body: "Los, Bazillus, präpariere den Audienzsaal und die Zeugen. ",
          Line: 3755
        }
      ],
      Line: 3755
    },
    {
      Name: "Regie",
      Body: [
        {
          Type: "Text",
          Body: "Zu Marcelline",
          Line: 3756
        }
      ],
      Line: 3756
    },
    {
      Name: "",
      Body: [
        {
          Type: "Text",
          Body: "Kommen Sie, Marcelline, vertrauen Sie der Gerechtigkeit! ",
          Line: 3756
        }
      ],
      Line: 3756
    },
    {
      Name: "Regie",
      Body: [
        {
          Type: "Text",
          Body: "Graf, Bazillus und Marcelline ab. Figaro, Susanne und Gräfin allein. ",
          Line: 3761
        }
      ],
      Line: 3760
    },
    {
      Name: "SUSANNE",
      Body: [
        {
          Type: "Text",
          Body: "Eins zu null für den Grafen. ",
          Line: 3766
        }
      ],
      Line: 3765
    },
    {
      Name: "GREFIN",
      Body: [
        {
          Type: "Text",
          Body: "Es tut mir leid für euch. ",
          Line: 3770
        }
      ],
      Line: 3769
    },
    {
      Name: "FIGARO",
      Body: [
        {
          Type: "Text",
          Body: "Nicht verzagen, Figaro fragen. ",
          Line: 3774
        }
      ],
      Line: 3773
    },
    {
      Name: "SUSANNE",
      Body: [
        {
          Type: "Text",
          Body: "Du weißt einen Ausweg? ",
          Line: 3778
        }
      ],
      Line: 3777
    },
    {
      Name: "FIGARO",
      Body: [
        {
          Type: "Text",
          Body: "Erstens: Noch ist nicht aller Tage Abend, zweitens: der Graf kocht auch nur mit Wasser, und drittens: die Liebe macht erfinderisch. ",
          Line: 3782
        }
      ],
      Line: 3781
    },
    {
      Name: "SUSANNE",
      Body: [
        {
          Type: "Text",
          Body: "Sprichwörter, Figaro. ",
          Line: 3788
        }
      ],
      Line: 3787
    },
    {
      Name: "GREFIN",
      Body: [
        {
          Type: "Text",
          Body: "Sprich weiter, Figaro. ",
          Line: 3792
        }
      ],
      Line: 3791
    },
    {
      Name: "FIGARO",
      Body: [
        {
          Type: "Text",
          Body: "Erstens: Noch ist nicht aller Tage Abend, noch hat die Verhandlung nicht stattgefunden. Susanne, du gehst sofort zum Grafen und gibst ihm ein Rendezvous, unter der Bedingung ... ",
          Line: 3796
        }
      ],
      Line: 3795
    },
    {
      Name: "",
      Body: [
        {
          Type: "Seite",
          Body: "48",
          Line: 3804
        }
      ],
      Line: 3804
    },
    {
      Name: "SUSANNE",
      Body: [
        {
          Type: "Text",
          Body: "... daß nichts passiert! ",
          Line: 3808
        }
      ],
      Line: 3807
    },
    {
      Name: "FIGARO",
      Body: [
        {
          Type: "Text",
          Body: "... daß er sich als Richter milde zeigt! ",
          Line: 3812
        }
      ],
      Line: 3811
    },
    {
      Name: "GREFIN",
      Body: [
        {
          Type: "Text",
          Body: "Da ihm mehr an Susanne als an Marcelline liegt, wird er drauf eingehen. ",
          Line: 3816
        }
      ],
      Line: 3815
    },
    {
      Name: "FIGARO",
      Body: [
        {
          Type: "Text",
          Body: "Und wenn er nachts zur vereinbarten Stelle kommt ... ",
          Line: 3821
        }
      ],
      Line: 3820
    },
    {
      Name: "GREFIN",
      Body: [
        {
          Type: "Text",
          Body: "Nach allem, was passiert ist, müssen wir Cherubin aus dem Spiel lassen ... ",
          Line: 3825
        }
      ],
      Line: 3824
    },
    {
      Name: "FIGARO",
      Body: [
        {
          Type: "Text",
          Body: "Und Euch ins Spiel nehmen. Frau Gräfin! Ihr müßt in Susannes Kleidern stecken. Stellt Euch die Liebesschwüre des Herrn Grafen vor. ",
          Line: 3830
        },
        {
          Type: "Regie",
          Body: "Figaro kniet nieder.",
          Line: 3832
        }
      ],
      Line: 3829
    },
    {
      Name: "",
      Body: [
        {
          Type: "Text",
          Body: "Geliebte, laß mich emporklettern zu den Gipfeln meiner Sehnsucht ... Ihr könnt ihn bei frischer Untreue ertappen! ",
          Line: 3833
        }
      ],
      Line: 3833
    },
    {
      Name: "GREFIN",
      Body: [
        {
          Type: "Text",
          Body: "Die Vorstellung gefällt mir ausgezeichnet. ",
          Line: 3838
        }
      ],
      Line: 3837
    },
    {
      Name: "FIGARO",
      Body: [
        {
          Type: "Text",
          Body: "Das war Nummer zwei. Der Graf kocht im eigenen Wasser. ",
          Line: 3842
        }
      ],
      Line: 3841
    },
    {
      Name: "SUSANNE",
      Body: [
        {
          Type: "Text",
          Body: "Und Nummer drei? Die Liebe macht erfinderisch? ",
          Line: 3846
        }
      ],
      Line: 3845
    },
    {
      Name: "FIGARO",
      Body: [
        {
          Type: "Text",
          Body: "Drei bezieht sich auf eins und zwei. ",
          Line: 3850
        }
      ],
      Line: 3849
    },
    {
      Name: "SUSANNE",
      Body: [
        {
          Type: "Regie",
          Body: "küßt ihn kurz auf die linke Wange",
          Line: 3854
        }
      ],
      Line: 3853
    },
    {
      Name: "",
      Body: [
        {
          Type: "Text",
          Body: "Und das bezieht sich auf deinen Mut. ",
          Line: 3854
        }
      ],
      Line: 3854
    },
    {
      Name: "Regie",
      Body: [
        {
          Type: "Text",
          Body: "küßt ihn kurz auf die rechte Wange",
          Line: 3855
        }
      ],
      Line: 3855
    },
    {
      Name: "",
      Body: [
        {
          Type: "Text",
          Body: "Und das auf deinen Witz. ",
          Line: 3856
        }
      ],
      Line: 3856
    },
    {
      Name: "Regie",
      Body: [
        {
          Type: "Text",
          Body: "sie küßt ihn auf die Stirne",
          Line: 3856
        }
      ],
      Line: 3856
    },
    {
      Name: "",
      Body: [
        {
          Type: "Text",
          Body: "Und das auf deine Klugheit. ",
          Line: 3857
        }
      ],
      Line: 3857
    },
    {
      Name: "FIGARO",
      Body: [
        {
          Type: "Regie",
          Body: "küßt Susanne auf die Lippen",
          Line: 3861
        }
      ],
      Line: 3860
    },
    {
      Name: "",
      Body: [
        {
          Type: "Text",
          Body: "Und das auf deine Schönheit! ",
          Line: 3861
        }
      ],
      Line: 3861
    },
    {
      Name: "GREFIN",
      Body: [
        {
          Type: "Text",
          Body: "Was für ein Paar! ",
          Line: 3865
        }
      ],
      Line: 3864
    },
    {
      Name: "",
      Body: [
        {
          Type: "LangsameEinstellung",
          Body: "Lied Graefin",
          Line: 3868
        }
      ],
      Line: 3868
    },
    {
      Name: "Regie",
      Body: [
        {
          Type: "Text",
          Body: "Umbau Ende des zweiten Aktes. Die Gräfin singt ein Lied. ",
          Line: 3871
        }
      ],
      Line: 3870
    },
    {
      Name: "GREFIN",
      Body: [
        {
          Type: "Text",
          Body: "Ich bin allein und sehe ",
          Line: 3876
        }
      ],
      Line: 3875
    },
    {
      Name: "",
      Body: [
        {
          Type: "Seite",
          Body: "49",
          Line: 3879
        }
      ],
      Line: 3879
    },
    {
      Name: "GREFIN",
      Body: [
        {
          Type: "Text",
          Body: "den Tag und die Nacht und den Tag.",
          Line: 3883
        },
        {
          Type: "",
          Body: "",
          Line: 3883
        },
        {
          Type: "",
          Body: "Sie gehen an mir vorüber,",
          Line: 3883
        },
        {
          Type: "Text",
          Body: "Sie gehen an mir vorüber,",
          Line: 3884
        },
        {
          Type: "",
          Body: "",
          Line: 3884
        },
        {
          Type: "",
          Body: "wie Dinge, die ich nicht mag.",
          Line: 3884
        },
        {
          Type: "Text",
          Body: "wie Dinge, die ich nicht mag.",
          Line: 3885
        },
        {
          Type: "",
          Body: "",
          Line: 3885
        },
        {
          Type: "",
          Body: "Erinnerst du dich an den Morgen?",
          Line: 3885
        },
        {
          Type: "Text",
          Body: "Erinnerst du dich an den Morgen?",
          Line: 3886
        },
        {
          Type: "",
          Body: "",
          Line: 3886
        },
        {
          Type: "",
          Body: "Dein Lachen floß wie der Wein.",
          Line: 3886
        },
        {
          Type: "Text",
          Body: "Dein Lachen floß wie der Wein.",
          Line: 3887
        },
        {
          Type: "",
          Body: "",
          Line: 3887
        },
        {
          Type: "",
          Body: "Mein Gesicht war in deinem geborgen;",
          Line: 3887
        },
        {
          Type: "Text",
          Body: "Mein Gesicht war in deinem geborgen;",
          Line: 3888
        },
        {
          Type: "",
          Body: "",
          Line: 3888
        },
        {
          Type: "",
          Body: "jetzt bin ich allein.",
          Line: 3888
        },
        {
          Type: "Text",
          Body: "jetzt bin ich allein.",
          Line: 3889
        },
        {
          Type: "",
          Body: "",
          Line: 3889
        },
        {
          Type: "",
          Body: "Erinnerst du dich an den Mittag?",
          Line: 3889
        },
        {
          Type: "Text",
          Body: "Erinnerst du dich an den Mittag?",
          Line: 3890
        },
        {
          Type: "",
          Body: "",
          Line: 3890
        },
        {
          Type: "",
          Body: "An den heißgebrannten Stein?",
          Line: 3890
        },
        {
          Type: "Text",
          Body: "An den heißgebrannten Stein?",
          Line: 3891
        },
        {
          Type: "",
          Body: "",
          Line: 3891
        },
        {
          Type: "",
          Body: "Der Fluß nahm ihn auf und lachte;",
          Line: 3891
        },
        {
          Type: "Text",
          Body: "Der Fluß nahm ihn auf und lachte;",
          Line: 3892
        },
        {
          Type: "",
          Body: "",
          Line: 3892
        },
        {
          Type: "",
          Body: "jetzt bin ich allein.",
          Line: 3892
        },
        {
          Type: "Text",
          Body: "jetzt bin ich allein.",
          Line: 3893
        },
        {
          Type: "",
          Body: "",
          Line: 3893
        },
        {
          Type: "",
          Body: "Erinnerst du dich an den Abend?",
          Line: 3893
        },
        {
          Type: "Text",
          Body: "Erinnerst du dich an den Abend?",
          Line: 3894
        },
        {
          Type: "",
          Body: "",
          Line: 3894
        },
        {
          Type: "",
          Body: "Wir trugen die Trauben herein.",
          Line: 3894
        },
        {
          Type: "Text",
          Body: "Wir trugen die Trauben herein.",
          Line: 3895
        },
        {
          Type: "",
          Body: "",
          Line: 3895
        },
        {
          Type: "",
          Body: "Ich biß sie dir aus den Lippen;",
          Line: 3895
        },
        {
          Type: "Text",
          Body: "Ich biß sie dir aus den Lippen;",
          Line: 3896
        },
        {
          Type: "",
          Body: "",
          Line: 3896
        },
        {
          Type: "",
          Body: "jetzt bin ich allein.",
          Line: 3896
        },
        {
          Type: "Text",
          Body: "jetzt bin ich allein.",
          Line: 3897
        },
        {
          Type: "",
          Body: "",
          Line: 3897
        },
        {
          Type: "",
          Body: "Erinnerst du dich an die Nacht?",
          Line: 3897
        },
        {
          Type: "Text",
          Body: "Erinnerst du dich an die Nacht?",
          Line: 3898
        },
        {
          Type: "",
          Body: "",
          Line: 3898
        },
        {
          Type: "",
          Body: "Mein Mund war überall dein.",
          Line: 3898
        },
        {
          Type: "Text",
          Body: "Mein Mund war überall dein.",
          Line: 3899
        },
        {
          Type: "",
          Body: "",
          Line: 3899
        },
        {
          Type: "",
          Body: "Du hast mir den Mond vom Himmel gebracht;",
          Line: 3899
        },
        {
          Type: "Text",
          Body: "Du hast mir den Mond vom Himmel gebracht;",
          Line: 3900
        },
        {
          Type: "",
          Body: "",
          Line: 3900
        },
        {
          Type: "",
          Body: "jetzt bin ich allein.",
          Line: 3900
        },
        {
          Type: "Text",
          Body: "jetzt bin ich allein.",
          Line: 3901
        },
        {
          Type: "",
          Body: "",
          Line: 3901
        },
        {
          Type: "",
          Body: "Ich bin allein und sehe",
          Line: 3901
        },
        {
          Type: "Text",
          Body: "Ich bin allein und sehe",
          Line: 3902
        },
        {
          Type: "",
          Body: "",
          Line: 3902
        },
        {
          Type: "",
          Body: "den Tag und die Nacht und den Tag.",
          Line: 3902
        },
        {
          Type: "Text",
          Body: "den Tag und die Nacht und den Tag.",
          Line: 3903
        },
        {
          Type: "",
          Body: "",
          Line: 3903
        },
        {
          Type: "",
          Body: "Sie gehen an mir vorüber,",
          Line: 3903
        },
        {
          Type: "Text",
          Body: "Sie gehen an mir vorüber,",
          Line: 3904
        },
        {
          Type: "",
          Body: "",
          Line: 3904
        },
        {
          Type: "",
          Body: "wie Dinge, die ich nicht mag. ",
          Line: 3904
        },
        {
          Type: "Text",
          Body: "wie Dinge, die ich nicht mag. ",
          Line: 3905
        }
      ],
      Line: 3882
    },
    {
      Name: "",
      Body: [
        {
          Type: "Einstellung",
          Body: "Dunkel",
          Line: 3909
        }
      ],
      Line: 3909
    },
    {
      Name: "Regie",
      Body: [
        {
          Type: "Text",
          Body: "Pause. Licht im Saal an. ",
          Line: 3911
        }
      ],
      Line: 3911
    },
    {
      Name: "",
      Body: [
        {
          Type: "Einstellung",
          Body: "Dunkel mit Musik leise",
          Line: 3913
        },
        {
          Type: "Seite",
          Body: "50",
          Line: 3915
        }
      ],
      Line: 3913
    },
    {
      Name: "Regie",
      Body: [
        {
          Type: "Text",
          Body: "Nach der Pause. Licht im Saal aus. ",
          Line: 3917
        }
      ],
      Line: 3917
    },
    {
      Name: "",
      Body: [
        {
          Type: "Einstellung",
          Body: "Umbau mit Musik leise",
          Line: 3919
        }
      ],
      Line: 3919
    },
    {
      Name: "Regie",
      Body: [
        {
          Type: "Text",
          Body: "Dritter Akt Der Audienzsaal des Schlosses. Der Graf und Bazillus sind auf der Bühne. Musik aus. ",
          Line: 3922
        }
      ],
      Line: 3921
    },
    {
      Name: "",
      Body: [
        {
          Type: "Einstellung",
          Body: "Voll Hell",
          Line: 3931
        }
      ],
      Line: 3931
    },
    {
      Name: "Regie",
      Body: [
        {
          Type: "Text",
          Body: "Es klopft. Bazillus verschwindet auf einen Wink des Grafen in der Truhe. ",
          Line: 3934
        }
      ],
      Line: 3933
    },
    {
      Name: "GRAF",
      Body: [
        {
          Type: "Regie",
          Body: "ruft",
          Line: 3939
        }
      ],
      Line: 3938
    },
    {
      Name: "",
      Body: [
        {
          Type: "Text",
          Body: "Ein Diener oder eine Person? ",
          Line: 3939
        }
      ],
      Line: 3939
    },
    {
      Name: "SUSANNE",
      Body: [
        {
          Type: "Regie",
          Body: "von draußen",
          Line: 3943
        }
      ],
      Line: 3942
    },
    {
      Name: "",
      Body: [
        {
          Type: "Text",
          Body: "Eine dienende Person. ",
          Line: 3943
        }
      ],
      Line: 3943
    },
    {
      Name: "GRAF",
      Body: [
        {
          Type: "Text",
          Body: "Vorwärts! ",
          Line: 3947
        }
      ],
      Line: 3946
    },
    {
      Name: "SUSANNE",
      Body: [
        {
          Type: "Regie",
          Body: "auf",
          Line: 3951
        }
      ],
      Line: 3950
    },
    {
      Name: "",
      Body: [
        {
          Type: "Text",
          Body: "Mit Verlaub, Herr Graf. Frau Gräfin lassen dem Herrn Grafen sagen, daß Frau Gräfin dem Herrn Grafen etwas sagen möchte. ",
          Line: 3951
        }
      ],
      Line: 3951
    },
    {
      Name: "GRAF",
      Body: [
        {
          Type: "Text",
          Body: "Und was läßt mir die Gräfin sagen? ",
          Line: 3957
        }
      ],
      Line: 3956
    },
    {
      Name: "SUSANNE",
      Body: [
        {
          Type: "Text",
          Body: "Das hat mir die Gräfin nicht gesagt. ",
          Line: 3961
        }
      ],
      Line: 3960
    },
    {
      Name: "GRAF",
      Body: [
        {
          Type: "Text",
          Body: "Du kommst also her, um mir zu sagen, daß mir die Gräfin sagen läßt, sie möchte mir etwas sagen, was du mir nicht sagen kannst? ",
          Line: 3965
        }
      ],
      Line: 3964
    },
    {
      Name: "SUSANNE",
      Body: [
        {
          Type: "Text",
          Body: "Darf ich etwas sagen, Herr Graf? Daß mir die Gräfin sagen läßt, sie möchte Euch etwas sagen, hat nichts zu sagen. ",
          Line: 3971
        }
      ],
      Line: 3970
    },
    {
      Name: "GRAF",
      Body: [
        {
          Type: "Text",
          Body: "Was willst du damit sagen? ",
          Line: 3977
        }
      ],
      Line: 3976
    },
    {
      Name: "SUSANNE",
      Body: [
        {
          Type: "Text",
          Body: "Ich kam Euretwegen, Herr Graf. ",
          Line: 3981
        }
      ],
      Line: 3980
    },
    {
      Name: "GRAF",
      Body: [
        {
          Type: "Text",
          Body: "Ein Vorwand also. ",
          Line: 3985
        }
      ],
      Line: 3984
    },
    {
      Name: "SUSANNE",
      Body: [
        {
          Type: "Text",
          Body: "Ein Vorwand in Form einer Vorrede, gewissermaßen. ",
          Line: 3989
        }
      ],
      Line: 3988
    },
    {
      Name: "GRAF",
      Body: [
        {
          Type: "Text",
          Body: "Nun, Susanne? ",
          Line: 3993
        }
      ],
      Line: 3992
    },
    {
      Name: "SUSANNE",
      Body: [
        {
          Type: "Regie",
          Body: "scheinbar verlegen",
          Line: 3997
        }
      ],
      Line: 3996
    },
    {
      Name: "",
      Body: [
        {
          Type: "Text",
          Body: "Nun, Herr Graf ... ",
          Line: 3997
        }
      ],
      Line: 3997
    },
    {
      Name: "GRAF",
      Body: [
        {
          Type: "Text",
          Body: "Was willst du mir sagen? ",
          Line: 4001
        }
      ],
      Line: 4000
    },
    {
      Name: "SUSANNE",
      Body: [
        {
          Type: "Text",
          Body: "Was ich bis jetzt nicht sagen konnte. ",
          Line: 4005
        }
      ],
      Line: 4004
    },
    {
      Name: "GRAF",
      Body: [
        {
          Type: "Text",
          Body: "Wieder ein Vorwand? ",
          Line: 4009
        }
      ],
      Line: 4008
    },
    {
      Name: "SUSANNE",
      Body: [
        {
          Type: "Text",
          Body: "Eine Vorsicht. Als Ihr mir heute Eure Absichten auf meine Person eröffnet habt... ",
          Line: 4013
        }
      ],
      Line: 4012
    },
    {
      Name: "GRAF",
      Body: [
        {
          Type: "Text",
          Body: "Warst du sehr abweisend, Susanne. ",
          Line: 4018
        }
      ],
      Line: 4017
    },
    {
      Name: "",
      Body: [
        {
          Type: "Seite",
          Body: "51",
          Line: 4023
        }
      ],
      Line: 4023
    },
    {
      Name: "SUSANNE",
      Body: [
        {
          Type: "Text",
          Body: "Wie konnte ich anders. Cherubin war unterm Lehnstuhl. Aber vielleicht kann ich jetzt anders. ",
          Line: 4027
        }
      ],
      Line: 4026
    },
    {
      Name: "GRAF",
      Body: [
        {
          Type: "Regie",
          Body: "geht auf Susanne zu",
          Line: 4032
        }
      ],
      Line: 4031
    },
    {
      Name: "",
      Body: [
        {
          Type: "Text",
          Body: "Du stimmst also zu? Superb, superb ... ",
          Line: 4032
        }
      ],
      Line: 4032
    },
    {
      Name: "SUSANNE",
      Body: [
        {
          Type: "Regie",
          Body: "entzieht sich dem Grafen",
          Line: 4036
        }
      ],
      Line: 4035
    },
    {
      Name: "",
      Body: [
        {
          Type: "Text",
          Body: "Wie gefällt Ihnen der Park um Mitternacht? ",
          Line: 4036
        }
      ],
      Line: 4036
    },
    {
      Name: "GRAF",
      Body: [
        {
          Type: "Text",
          Body: "Ausgezeichnet, mein Kind. Ich werde pünktlich sein. Ich erwarte dich halb angezogen und ganz gewaschen. Und kein Wort zu Figaro! ",
          Line: 4040
        }
      ],
      Line: 4039
    },
    {
      Name: "SUSANNE",
      Body: [
        {
          Type: "Text",
          Body: "Oh, ich sage ihm alles! ",
          Line: 4046
        }
      ],
      Line: 4045
    },
    {
      Name: "GRAF",
      Body: [
        {
          Type: "Text",
          Body: "Was? ",
          Line: 4050
        }
      ],
      Line: 4049
    },
    {
      Name: "SUSANNE",
      Body: [
        {
          Type: "Text",
          Body: "Was er wissen darf. Den Rest, den verschweige ich. ",
          Line: 4054
        }
      ],
      Line: 4053
    },
    {
      Name: "GRAF",
      Body: [
        {
          Type: "Text",
          Body: "Was für ein witziger Leckerbissen. Almaviva, ich gratuliere dir zu dieser Delikatesse. ",
          Line: 4058
        }
      ],
      Line: 4057
    },
    {
      Name: "SUSANNE",
      Body: [
        {
          Type: "Text",
          Body: "Noch ist das Fräulein nicht vernascht, Herr Graf. ",
          Line: 4063
        }
      ],
      Line: 4062
    },
    {
      Name: "GRAF",
      Body: [
        {
          Type: "Text",
          Body: "Susanne, ich warne dich. Kein Rendezvous, keine Hochzeit. ",
          Line: 4067
        }
      ],
      Line: 4066
    },
    {
      Name: "SUSANNE",
      Body: [
        {
          Type: "Text",
          Body: "Und umgekehrt: keine Hochzeit, kein Rendezvous. Herr Graf, ich danke Euch. ",
          Line: 4071
        }
      ],
      Line: 4070
    },
    {
      Name: "GRAF",
      Body: [
        {
          Type: "Text",
          Body: "Superb, superb ... ",
          Line: 4076
        }
      ],
      Line: 4075
    },
    {
      Name: "Regie",
      Body: [
        {
          Type: "Text",
          Body: "Der Graf ab. Figaro steigt aus einer Truhe. ",
          Line: 4080
        }
      ],
      Line: 4079
    },
    {
      Name: "FIGARO",
      Body: [
        {
          Type: "Regie",
          Body: "macht den Grafen nach",
          Line: 4084
        }
      ],
      Line: 4083
    },
    {
      Name: "",
      Body: [
        {
          Type: "Text",
          Body: "Superb, superb ... ich habe alles verstanden. Es läuft und läuft und läuft und läuft. Direkt superb, wie sich der Graf in der eigenen Schlinge fängt. ",
          Line: 4084
        }
      ],
      Line: 4084
    },
    {
      Name: "SUSANNE",
      Body: [
        {
          Type: "Text",
          Body: "Der Prozeß ist so gut wie gewonnen, Figaro. ",
          Line: 4091
        }
      ],
      Line: 4090
    },
    {
      Name: "FIGARO",
      Body: [
        {
          Type: "Text",
          Body: "Und das Mädchen dazu! ",
          Line: 4095
        },
        {
          Type: "Regie",
          Body: "Figaro umarmt Susanne.",
          Line: 4095
        }
      ],
      Line: 4094
    },
    {
      Name: "",
      Body: [],
      Line: 4096
    },
    {
      Name: "SUSANNE",
      Body: [
        {
          Type: "Regie",
          Body: "lachend, abwehrend",
          Line: 4099
        }
      ],
      Line: 4098
    },
    {
      Name: "",
      Body: [
        {
          Type: "Text",
          Body: "Plumper Kater! ",
          Line: 4099
        }
      ],
      Line: 4099
    },
    {
      Name: "FIGARO",
      Body: [
        {
          Type: "Text",
          Body: "Schnöde Katze! ",
          Line: 4103
        }
      ],
      Line: 4102
    },
    {
      Name: "SUSANNE",
      Body: [
        {
          Type: "Regie",
          Body: "ernst",
          Line: 4107
        }
      ],
      Line: 4106
    },
    {
      Name: "",
      Body: [
        {
          Type: "Text",
          Body: "Oh, Figaro, wenn wir immer zusammenhalten, wird alles gut werden. ",
          Line: 4107
        }
      ],
      Line: 4107
    },
    {
      Name: "FIGARO",
      Body: [
        {
          Type: "Regie",
          Body: "Figaro umarmt Susanne.",
          Line: 4112
        }
      ],
      Line: 4111
    },
    {
      Name: "",
      Body: [],
      Line: 4113
    },
    {
      Name: "SUSANNE",
      Body: [
        {
          Type: "Text",
          Body: "Mußt du schon wieder ...? ",
          Line: 4116
        }
      ],
      Line: 4115
    },
    {
      Name: "",
      Body: [
        {
          Type: "Seite",
          Body: "52",
          Line: 4121
        }
      ],
      Line: 4121
    },
    {
      Name: "FIGARO",
      Body: [
        {
          Type: "Text",
          Body: "Du sagtest doch, man müßte immer ... ",
          Line: 4125
        }
      ],
      Line: 4124
    },
    {
      Name: "SUSANNE",
      Body: [
        {
          Type: "Text",
          Body: "Was? ",
          Line: 4129
        }
      ],
      Line: 4128
    },
    {
      Name: "FIGARO",
      Body: [
        {
          Type: "Text",
          Body: "zusammenhalten! ",
          Line: 4133
        }
      ],
      Line: 4132
    },
    {
      Name: "Regie",
      Body: [
        {
          Type: "Text",
          Body: "Die beiden gehen lachend ab. Bazillus steigt aus der nächsten Truhe. ",
          Line: 4137
        }
      ],
      Line: 4136
    },
    {
      Name: "BAZILLUS",
      Body: [
        {
          Type: "Text",
          Body: "Superb, superb ... ich habe alles verstanden. Intrigen, wohin man hört. Ich muß sofort den Grafen informieren. ",
          Line: 4142
        }
      ],
      Line: 4141
    },
    {
      Name: "GRAF",
      Body: [
        {
          Type: "Regie",
          Body: "auf",
          Line: 4147
        }
      ],
      Line: 4146
    },
    {
      Name: "",
      Body: [],
      Line: 4148
    },
    {
      Name: "BAZILLUS",
      Body: [
        {
          Type: "Text",
          Body: "Herr Graf, ich melde eine neue Intrige. ",
          Line: 4151
        }
      ],
      Line: 4150
    },
    {
      Name: "GRAF",
      Body: [
        {
          Type: "Text",
          Body: "Habe ich eine bestellt? ",
          Line: 4155
        }
      ],
      Line: 4154
    },
    {
      Name: "BAZILLUS",
      Body: [
        {
          Type: "Text",
          Body: "Die Konkurrenz ist am Werk, Herr Graf. Als Ihr Euch mit Susanne über ein gewisses Thema unterhalten habt ... ",
          Line: 4159
        }
      ],
      Line: 4158
    },
    {
      Name: "GRAF",
      Body: [
        {
          Type: "Text",
          Body: "Hast du alles mitgehört. ",
          Line: 4164
        }
      ],
      Line: 4163
    },
    {
      Name: "BAZILLUS",
      Body: [
        {
          Type: "Text",
          Body: "Ebenso Figaro! ",
          Line: 4168
        }
      ],
      Line: 4167
    },
    {
      Name: "GRAF",
      Body: [
        {
          Type: "Text",
          Body: "Figaro ebenso? ",
          Line: 4172
        }
      ],
      Line: 4171
    },
    {
      Name: "BAZILLUS",
      Body: [
        {
          Type: "Text",
          Body: "Während ich in dieser Truhe lag, lag er in jener. ",
          Line: 4176
        }
      ],
      Line: 4175
    },
    {
      Name: "GRAF",
      Body: [
        {
          Type: "Text",
          Body: "Dann hat er alles mitgehört? ",
          Line: 4180
        }
      ],
      Line: 4179
    },
    {
      Name: "BAZILLUS",
      Body: [
        {
          Type: "Text",
          Body: "Während er aus jener Truhe stieg, blieb ich in dieser. ",
          Line: 4184
        }
      ],
      Line: 4183
    },
    {
      Name: "GRAF",
      Body: [
        {
          Type: "Text",
          Body: "Dann hast du alles mitgehört? ",
          Line: 4188
        }
      ],
      Line: 4187
    },
    {
      Name: "BAZILLUS",
      Body: [
        {
          Type: "Text",
          Body: "Wenn ich in kurzen Worten wiedergeben darf. Figaro stieg aus der Truhe und sagte 'süperb'. ",
          Line: 4192
        }
      ],
      Line: 4191
    },
    {
      Name: "GRAF",
      Body: [
        {
          Type: "Text",
          Body: "Das habe ich beim Abtritt gesagt. ",
          Line: 4197
        }
      ],
      Line: 4196
    },
    {
      Name: "BAZILLUS",
      Body: [
        {
          Type: "Text",
          Body: "Und er beim Auftritt. ",
          Line: 4201
        }
      ],
      Line: 4200
    },
    {
      Name: "GRAF",
      Body: [
        {
          Type: "Text",
          Body: "Die reinste Komödie. ",
          Line: 4205
        }
      ],
      Line: 4204
    },
    {
      Name: "BAZILLUS",
      Body: [
        {
          Type: "Text",
          Body: "Dann sagte Figaro zu Susanne, das hast du gut gemacht, dann sagte Susanne zu Figaro, der Prozeß ist so gut wie gewonnen, dann sagte Figaro zu Susanne schnöde Katze, dann sagte Susanne zu Figaro plumper Kater, dann ... ",
          Line: 4209
        }
      ],
      Line: 4208
    },
    {
      Name: "GRAF",
      Body: [
        {
          Type: "Text",
          Body: "Ein abgekartetes Spiel! ",
          Line: 4217
        }
      ],
      Line: 4216
    },
    {
      Name: "BAZILLUS",
      Body: [
        {
          Type: "Text",
          Body: "Total abgekartet! ",
          Line: 4221
        }
      ],
      Line: 4220
    },
    {
      Name: "GRAF",
      Body: [
        {
          Type: "Text",
          Body: "Und ich dachte, Susanne spricht mit aufrichtiger Zuneigung. Was kann man von der Dienerschaft anderes ",
          Line: 4225
        }
      ],
      Line: 4224
    },
    {
      Name: "",
      Body: [
        {
          Type: "Seite",
          Body: "53",
          Line: 4231
        }
      ],
      Line: 4231
    },
    {
      Name: "GRAF",
      Body: [
        {
          Type: "Text",
          Body: "erwarten als Falschheit. Sofort eine Gegenintrige, Bazillus. ",
          Line: 4235
        }
      ],
      Line: 4234
    },
    {
      Name: "BAZILLUS",
      Body: [
        {
          Type: "Text",
          Body: "Ihr müßt Figaro verurteilen lassen, Herr Graf. ",
          Line: 4240
        }
      ],
      Line: 4239
    },
    {
      Name: "GRAF",
      Body: [
        {
          Type: "Text",
          Body: "Und wie komme ich dann zu Susanne? ",
          Line: 4244
        }
      ],
      Line: 4243
    },
    {
      Name: "BAZILLUS",
      Body: [
        {
          Type: "Text",
          Body: "Mit der nächsten Intrige. Susanne wird Euch bitten, Figaro nicht mit Marcelline zu verheiraten. Sie wird Euch anflehen, das Urteil aufzuheben. Ihr sagt ja. ",
          Line: 4248
        }
      ],
      Line: 4247
    },
    {
      Name: "GRAF",
      Body: [
        {
          Type: "Text",
          Body: "Ich sage nein. ",
          Line: 4254
        }
      ],
      Line: 4253
    },
    {
      Name: "BAZILLUS",
      Body: [
        {
          Type: "Text",
          Body: "Ihr sagt ja, unter der Bedingung, daß sie zu Euren Bedingungen ja sagt. ",
          Line: 4258
        }
      ],
      Line: 4257
    },
    {
      Name: "GRAF",
      Body: [
        {
          Type: "Text",
          Body: "Und wie lauten meine Bedingungen? ",
          Line: 4263
        }
      ],
      Line: 4262
    },
    {
      Name: "BAZILLUS",
      Body: [
        {
          Type: "Text",
          Body: "Bedingungslose Unterwerfung, noch vor der Hochzeit. ",
          Line: 4267
        }
      ],
      Line: 4266
    },
    {
      Name: "GRAF",
      Body: [
        {
          Type: "Text",
          Body: "Bravo, Schurkenkopf. Das ist eine Intrige, wie sie im Buche steht. ",
          Line: 4271
        }
      ],
      Line: 4270
    },
    {
      Name: "BAZILLUS",
      Body: [
        {
          Type: "Text",
          Body: "Kleine Intrigenkunde, Vierter Band, die Haus- und Hofintrige. ",
          Line: 4275
        }
      ],
      Line: 4274
    },
    {
      Name: "GRAF",
      Body: [
        {
          Type: "Text",
          Body: "Wer schreibt solche Bücher? ",
          Line: 4279
        }
      ],
      Line: 4278
    },
    {
      Name: "BAZILLUS",
      Body: [
        {
          Type: "Text",
          Body: "Herr Caron de Beaumarchais aus Paris. ",
          Line: 4283
        }
      ],
      Line: 4282
    },
    {
      Name: "GRAF",
      Body: [
        {
          Type: "Text",
          Body: "Ein Edelmann? Kann er sich keinen eigenen Intriganten leisten? ",
          Line: 4287
        }
      ],
      Line: 4286
    },
    {
      Name: "Regie",
      Body: [
        {
          Type: "Text",
          Body: "Don Guzman di Stibizia, der Ortsrichter, und Zettelkopf, sein Diener, treten auf. ",
          Line: 4291
        }
      ],
      Line: 4290
    },
    {
      Name: "DONGUZMAN",
      Body: [
        {
          Type: "Text",
          Body: "Don Guzman di Stibizia, Diener der Gerechtigkeit mit Diener. ",
          Line: 4296
        }
      ],
      Line: 4295
    },
    {
      Name: "ZETTELKOPF",
      Body: [
        {
          Type: "Text",
          Body: "Zettelkopf, zu dienen. ",
          Line: 4300
        }
      ],
      Line: 4299
    },
    {
      Name: "GRAF",
      Body: [
        {
          Type: "Regie",
          Body: "zu Guzman",
          Line: 4304
        }
      ],
      Line: 4303
    },
    {
      Name: "",
      Body: [
        {
          Type: "Text",
          Body: "Warum braucht ein Diener einen Diener? ",
          Line: 4304
        }
      ],
      Line: 4304
    },
    {
      Name: "DONGUZMAN",
      Body: [
        {
          Type: "Text",
          Body: "Weil ein Diener den Herrn macht, Herr Graf! ",
          Line: 4308
        }
      ],
      Line: 4307
    },
    {
      Name: "GRAF",
      Body: [
        {
          Type: "Text",
          Body: "Wenn er ein Herr ist, warum nennt er sich dann Diener? Diener der Gerechtigkeit? ",
          Line: 4312
        }
      ],
      Line: 4311
    },
    {
      Name: "DONGUZMAN",
      Body: [
        {
          Type: "Text",
          Body: "Weil ich als Diener an der Gerechtigkeit verdiene, während ich sie als Herr bezahlen müßte. ",
          Line: 4317
        }
      ],
      Line: 4316
    },
    {
      Name: "GRAF",
      Body: [
        {
          Type: "Text",
          Body: "Nun gut, Herr Richter. Sie wissen, was Sie zu tun ",
          Line: 4322
        }
      ],
      Line: 4321
    },
    {
      Name: "",
      Body: [
        {
          Type: "Seite",
          Body: "54",
          Line: 4327
        }
      ],
      Line: 4327
    },
    {
      Name: "GRAF",
      Body: [
        {
          Type: "Text",
          Body: "haben? Der Prozeß läuft folgendermaßen. Ich führe den Vorsitz und wahre den Anschein der Gerechtigkeit, und Sie verurteilen Figaro, unter allen Umständen. ",
          Line: 4331
        }
      ],
      Line: 4330
    },
    {
      Name: "DONGUZMAN",
      Body: [
        {
          Type: "Text",
          Body: "Ich verstehe, die Gerechtigkeit wird unter allen Umständen gewahrt. ",
          Line: 4337
        }
      ],
      Line: 4336
    },
    {
      Name: "GRAF",
      Body: [
        {
          Type: "Regie",
          Body: "zu Bazillus",
          Line: 4342
        }
      ],
      Line: 4341
    },
    {
      Name: "",
      Body: [
        {
          Type: "Text",
          Body: "Er versteht mich nicht ... ",
          Line: 4342
        }
      ],
      Line: 4342
    },
    {
      Name: "BAZILLUS",
      Body: [
        {
          Type: "Regie",
          Body: "macht das Geldzeichen",
          Line: 4346
        }
      ],
      Line: 4345
    },
    {
      Name: "",
      Body: [
        {
          Type: "Text",
          Body: "Ihr müßt etwas mehr Verständnis zeigen ... ",
          Line: 4346
        }
      ],
      Line: 4346
    },
    {
      Name: "GRAF",
      Body: [
        {
          Type: "Text",
          Body: "Ich verstehe, 30 Gulden in bar. ",
          Line: 4351
        }
      ],
      Line: 4350
    },
    {
      Name: "ZETTELKOPF",
      Body: [
        {
          Type: "Text",
          Body: "Notiere 30. ",
          Line: 4355
        }
      ],
      Line: 4354
    },
    {
      Name: "DONGUZMAN",
      Body: [
        {
          Type: "Text",
          Body: "Ich verstehe, die Gerechtigkeit wird unter allem Anschein gewahrt. Das erfordert eine Menge Mehrarbeit. Dreifache Dehnung der Paragraphen, vierfache Umdrehung des Wortlautes, fünffache Verdrehung des Sachverhaltes ... ",
          Line: 4359
        }
      ],
      Line: 4358
    },
    {
      Name: "GRAF",
      Body: [
        {
          Type: "Text",
          Body: "Reden Sie nicht so viel. Machen Sie einen Kostenvoranschlag. ",
          Line: 4367
        }
      ],
      Line: 4366
    },
    {
      Name: "DONGUZMAN",
      Body: [
        {
          Type: "Text",
          Body: "Ein normales Urteil kommt in der Regel auf ... ",
          Line: 4371
        }
      ],
      Line: 4370
    },
    {
      Name: "GRAF",
      Body: [
        {
          Type: "Text",
          Body: "50 Gulden auf die Hand ohne Quittung, einverstanden? ",
          Line: 4375
        }
      ],
      Line: 4374
    },
    {
      Name: "ZETTELKOPF",
      Body: [
        {
          Type: "Text",
          Body: "Notiere 50. ",
          Line: 4379
        }
      ],
      Line: 4378
    },
    {
      Name: "DONGUZMAN",
      Body: [
        {
          Type: "Text",
          Body: "Das wäre allerdings die einfachste Ausführung. Mit Einspruchsrecht et cetera. Ein sehr gutes Urteil hingegen ... ",
          Line: 4383
        }
      ],
      Line: 4382
    },
    {
      Name: "GRAF",
      Body: [
        {
          Type: "Text",
          Body: "60 Gulden und basta. ",
          Line: 4388
        }
      ],
      Line: 4387
    },
    {
      Name: "ZETTELKOPF",
      Body: [
        {
          Type: "Text",
          Body: "Notiere 60. ",
          Line: 4392
        }
      ],
      Line: 4391
    },
    {
      Name: "DONGUZMAN",
      Body: [
        {
          Type: "Text",
          Body: "... ist bereits wesentlich stabiler, wenn es auch nicht an die Sonderausführung mit falschen Zeugenaussagen, erstklassigen Meineiden und allem Drum und Dran heranreicht. ",
          Line: 4396
        }
      ],
      Line: 4395
    },
    {
      Name: "GRAF",
      Body: [
        {
          Type: "Text",
          Body: "100 Gulden, mein letztes Wort. ",
          Line: 4402
        }
      ],
      Line: 4401
    },
    {
      Name: "DONGUZMAN",
      Body: [
        {
          Type: "Text",
          Body: "Gratuliere, Herr Graf. Ich darf noch hinzufügen, daß diese exquisite Form des Urteils besonders bei Hofe reißenden Absatz findet. Herr Graf haben Geschmack. ",
          Line: 4406
        }
      ],
      Line: 4405
    },
    {
      Name: "",
      Body: [
        {
          Type: "Seite",
          Body: "55",
          Line: 4413
        }
      ],
      Line: 4413
    },
    {
      Name: "ZETTELKOPF",
      Body: [
        {
          Type: "Regie",
          Body: "reicht dem Grafen Papier und Feder",
          Line: 4417
        }
      ],
      Line: 4416
    },
    {
      Name: "",
      Body: [
        {
          Type: "Text",
          Body: "Zu dienen, Exzellenz. ",
          Line: 4417
        }
      ],
      Line: 4417
    },
    {
      Name: "GRAF",
      Body: [
        {
          Type: "Text",
          Body: "Was will dieser Diener eines Dieners? ",
          Line: 4421
        }
      ],
      Line: 4420
    },
    {
      Name: "BAZILLUS",
      Body: [
        {
          Type: "Text",
          Body: "Dieser Afterdiener! ",
          Line: 4425
        }
      ],
      Line: 4424
    },
    {
      Name: "DONGUZMAN",
      Body: [
        {
          Type: "Text",
          Body: "Der Bestellschein. Eine Formsache, Herr Graf. ",
          Line: 4429
        }
      ],
      Line: 4428
    },
    {
      Name: "GRAF",
      Body: [
        {
          Type: "Regie",
          Body: "liest",
          Line: 4433
        }
      ],
      Line: 4432
    },
    {
      Name: "",
      Body: [
        {
          Type: "Text",
          Body: "Ein Urteil in Sonderausführung, hundert Gulden. Plus zehn Prozent Intrigantensteuer, zehn Gulden. Rechtsbeugungstaxe, in Klammern stempelpflichtig, fünfzehn Gulden. Verdrehungs- und Verschleierungszulage, elf Gulden. Anteiliger Gewissensschwund, zweifünfzig. Summa summarum, hundertachtunddreißig-fünfzig. Was soll das? ",
          Line: 4433
        }
      ],
      Line: 4433
    },
    {
      Name: "DONGUZMAN",
      Body: [
        {
          Type: "Text",
          Body: "Die Extras sind im Preise nicht inbegriffen, wenn ich bemerken darf. ",
          Line: 4442
        }
      ],
      Line: 4441
    },
    {
      Name: "GRAF",
      Body: [
        {
          Type: "Text",
          Body: "Ich darf bemerken, daß Sie mir teuer zu stehen kommen, Herr Richter. ",
          Line: 4447
        }
      ],
      Line: 4446
    },
    {
      Name: "DONGUZMAN",
      Body: [
        {
          Type: "Text",
          Body: "Ich darf hinzufügen, daß eine erstklassige Gerechtigkeit ihren Preis hat, Herr Graf. ",
          Line: 4451
        }
      ],
      Line: 4450
    },
    {
      Name: "GRAF",
      Body: [
        {
          Type: "Regie",
          Body: "Der Graf nimmt die Feder.",
          Line: 4456
        }
      ],
      Line: 4455
    },
    {
      Name: "",
      Body: [],
      Line: 4457
    },
    {
      Name: "DONGUZMAN",
      Body: [
        {
          Type: "Text",
          Body: "Zu dienen, Herr Graf. ",
          Line: 4460
        }
      ],
      Line: 4459
    },
    {
      Name: "ZETTELKOPF",
      Body: [
        {
          Type: "Text",
          Body: "Zu Füßen, Herr Graf. ",
          Line: 4464
        }
      ],
      Line: 4463
    },
    {
      Name: "GRAF",
      Body: [
        {
          Type: "Regie",
          Body: "Der Graf unterschreibt.",
          Line: 4468
        }
      ],
      Line: 4467
    },
    {
      Name: "",
      Body: [
        {
          Type: "Text",
          Body: "Presto, presto, Sie erstklassiger Richter. Walten Sie Ihres bezahlten Amtes. Richten Sie alles für die Verhandlung her. Figaro, jetzt hängst du in der Schlinge. Das Urteil lautet... ",
          Line: 4469
        }
      ],
      Line: 4469
    },
    {
      Name: "BAZILLUS",
      Body: [
        {
          Type: "Text",
          Body: "Ehestand mit Marcelline. Lebenslänglich. ",
          Line: 4476
        }
      ],
      Line: 4475
    },
    {
      Name: "GRAF",
      Body: [
        {
          Type: "Text",
          Body: "Und die Aufhebung des Urteils kostet... ",
          Line: 4480
        }
      ],
      Line: 4479
    },
    {
      Name: "BAZILLUS",
      Body: [
        {
          Type: "Text",
          Body: "Die sofortige Hingabe Susannes. Hinlänglich. ",
          Line: 4484
        }
      ],
      Line: 4483
    },
    {
      Name: "GRAF",
      Body: [
        {
          Type: "Text",
          Body: "Gulden und Gerechtigkeit. Die Justiz macht Spaß! ",
          Line: 4488
        }
      ],
      Line: 4487
    },
    {
      Name: "Regie",
      Body: [
        {
          Type: "Text",
          Body: "Der Graf und Bazillus ab. ",
          Line: 4492
        }
      ],
      Line: 4491
    },
    {
      Name: "ZETTELKOPF",
      Body: [
        {
          Type: "Text",
          Body: "Eine gute Kundschaft. ",
          Line: 4496
        }
      ],
      Line: 4495
    },
    {
      Name: "DONGUZMAN",
      Body: [
        {
          Type: "Text",
          Body: "Ein guter Abschluß. Hundertvierzig Kröten, brutto gleich netto. ",
          Line: 4500
        }
      ],
      Line: 4499
    },
    {
      Name: "",
      Body: [
        {
          Type: "Seite",
          Body: "56",
          Line: 4506
        }
      ],
      Line: 4506
    },
    {
      Name: "ZETTELKOPF",
      Body: [
        {
          Type: "Text",
          Body: "Verzeiht, brutto gleich brutto. ",
          Line: 4510
        }
      ],
      Line: 4509
    },
    {
      Name: "DONGUZMAN",
      Body: [
        {
          Type: "Text",
          Body: "Verdammt, brutto gleich netto. ",
          Line: 4514
        }
      ],
      Line: 4513
    },
    {
      Name: "ZETTELKOPF",
      Body: [
        {
          Type: "Text",
          Body: "Verflixt, brutto gleich brutto. ",
          Line: 4518
        }
      ],
      Line: 4517
    },
    {
      Name: "DONGUZMAN",
      Body: [
        {
          Type: "Text",
          Body: "Verflucht, brutto gleich netto. ",
          Line: 4522
        }
      ],
      Line: 4521
    },
    {
      Name: "ZETTELKOPF",
      Body: [
        {
          Type: "Regie",
          Body: "Zettelkopf reicht dem Richter Papier und Feder.",
          Line: 4526
        }
      ],
      Line: 4525
    },
    {
      Name: "",
      Body: [],
      Line: 4527
    },
    {
      Name: "DONGUZMAN",
      Body: [
        {
          Type: "Text",
          Body: "Was soll das? ",
          Line: 4530
        }
      ],
      Line: 4529
    },
    {
      Name: "ZETTELKOPF",
      Body: [
        {
          Type: "Text",
          Body: "Die Provisionsabrechnung. Folgende Posten werden vom Bruttopreis abgezogen und an den Schreiber Zettelkopf überwiesen. Zehn Prozent Schweigegeld, macht dreizehnfünfundachtzig. Vertuschungszulage und Gewerkschaftsbeitrag, elf Gulden. ",
          Line: 4534
        }
      ],
      Line: 4533
    },
    {
      Name: "DONGUZMAN",
      Body: [
        {
          Type: "Text",
          Body: "Seit wann zahlt der Unternehmer die Gewerkschaft? ",
          Line: 4542
        }
      ],
      Line: 4541
    },
    {
      Name: "ZETTELKOPF",
      Body: [
        {
          Type: "Text",
          Body: "Ein stillschweigendes Verfahren, Herr Richter. ",
          Line: 4546
        }
      ],
      Line: 4545
    },
    {
      Name: "DONGUZMAN",
      Body: [
        {
          Type: "Text",
          Body: "Gut. Und warum berechnest du den anteiligen Gewissensschwund höher als ich? ",
          Line: 4550
        }
      ],
      Line: 4549
    },
    {
      Name: "ZETTELKOPF",
      Body: [
        {
          Type: "Text",
          Body: "Was macht es, wenn ein Herr sein Gewissen verliert? Einem Diener kommt es teuer zu stehen. ",
          Line: 4555
        }
      ],
      Line: 4554
    },
    {
      Name: "DONGUZMAN",
      Body: [
        {
          Type: "Text",
          Body: "Zettelkopf, wo hat er nur seine Geldgier her? ",
          Line: 4560
        },
        {
          Type: "Regie",
          Body: "Don Guzman nimmt die Feder.",
          Line: 4561
        }
      ],
      Line: 4559
    },
    {
      Name: "",
      Body: [],
      Line: 4562
    },
    {
      Name: "ZETTELKOPF",
      Body: [
        {
          Type: "Text",
          Body: "Zu dienen, Herr Richter. ",
          Line: 4565
        }
      ],
      Line: 4564
    },
    {
      Name: "DONGUZMAN",
      Body: [
        {
          Type: "Regie",
          Body: "Don Guzman unterschreibt.",
          Line: 4569
        }
      ],
      Line: 4568
    },
    {
      Name: "",
      Body: [],
      Line: 4570
    },
    {
      Name: "ZETTELKOPF",
      Body: [
        {
          Type: "Text",
          Body: "Zu Füßen, Herr Richter. ",
          Line: 4573
        }
      ],
      Line: 4572
    },
    {
      Name: "Regie",
      Body: [
        {
          Type: "Text",
          Body: "Marcelline und Bartholo treten auf. ",
          Line: 4577
        }
      ],
      Line: 4576
    },
    {
      Name: "DONGUZMAN",
      Body: [
        {
          Type: "Regie",
          Body: "verbeugt sich",
          Line: 4581
        }
      ],
      Line: 4580
    },
    {
      Name: "",
      Body: [
        {
          Type: "Text",
          Body: "Zu dienen, verehrte Dame. Don Guzman di Stibizia, Diener der Gerechtigkeit mit Diener. ",
          Line: 4581
        }
      ],
      Line: 4581
    },
    {
      Name: "ZETTELKOPF",
      Body: [
        {
          Type: "Text",
          Body: "Zettelkopf, zu dienen. ",
          Line: 4587
        }
      ],
      Line: 4586
    },
    {
      Name: "MARCELLINE",
      Body: [
        {
          Type: "Text",
          Body: "Ah, der Richter. Ich suche Sie schon überall. Herr Richter, Sie müssen mir zu meinem Recht verhelfen. ",
          Line: 4591
        }
      ],
      Line: 4590
    },
    {
      Name: "DONGUZMAN",
      Body: [
        {
          Type: "Text",
          Body: "Wenn Ihr Recht nicht das Unrecht eines andern ist? ",
          Line: 4596
        }
      ],
      Line: 4595
    },
    {
      Name: "ZETTELKOPF",
      Body: [
        {
          Type: "Regie",
          Body: "leise",
          Line: 4600
        }
      ],
      Line: 4599
    },
    {
      Name: "",
      Body: [
        {
          Type: "Text",
          Body: "Kundschaft, Herr Richter. ",
          Line: 4600
        }
      ],
      Line: 4600
    },
    {
      Name: "",
      Body: [
        {
          Type: "Seite",
          Body: "57",
          Line: 4605
        }
      ],
      Line: 4605
    },
    {
      Name: "MARCELLINE",
      Body: [
        {
          Type: "Text",
          Body: "Das ist mein Anwalt, Doktor Bartholo. ",
          Line: 4609
        }
      ],
      Line: 4608
    },
    {
      Name: "DONGUZMAN",
      Body: [
        {
          Type: "Text",
          Body: "Ah, ein Kollege. Justus schnustus vibus bibus? ",
          Line: 4613
        }
      ],
      Line: 4612
    },
    {
      Name: "BARTHOLO",
      Body: [
        {
          Type: "Text",
          Body: "Sosolala. ",
          Line: 4617
        }
      ],
      Line: 4616
    },
    {
      Name: "DONGUZMAN",
      Body: [
        {
          Type: "Text",
          Body: "Habemus interessum percentum? ",
          Line: 4621
        }
      ],
      Line: 4620
    },
    {
      Name: "BARTHOLO",
      Body: [
        {
          Type: "Text",
          Body: "Percentum habemus interessum! ",
          Line: 4625
        }
      ],
      Line: 4624
    },
    {
      Name: "DONGUZMAN",
      Body: [
        {
          Type: "Text",
          Body: "Ventum percentum? ",
          Line: 4629
        }
      ],
      Line: 4628
    },
    {
      Name: "BARTHOLO",
      Body: [
        {
          Type: "Text",
          Body: "Quarantum percentum! ",
          Line: 4633
        }
      ],
      Line: 4632
    },
    {
      Name: "DONGUZMAN",
      Body: [
        {
          Type: "Text",
          Body: "Trentum percentum. Basta zasta. ",
          Line: 4637
        }
      ],
      Line: 4636
    },
    {
      Name: "BARTHOLO",
      Body: [
        {
          Type: "Text",
          Body: "Bonum. ",
          Line: 4641
        }
      ],
      Line: 4640
    },
    {
      Name: "DONGUZMAN",
      Body: [
        {
          Type: "Text",
          Body: "Punktum. ",
          Line: 4645
        }
      ],
      Line: 4644
    },
    {
      Name: "MARCELLINE",
      Body: [
        {
          Type: "Text",
          Body: "Was reden die Herren? Das kommt mir spanisch vor. ",
          Line: 4649
        }
      ],
      Line: 4648
    },
    {
      Name: "ZETTELKOPF",
      Body: [
        {
          Type: "Text",
          Body: "Lateinisch, zu dienen. ",
          Line: 4653
        }
      ],
      Line: 4652
    },
    {
      Name: "DONGUZMAN",
      Body: [
        {
          Type: "Regie",
          Body: "zu Marcelline",
          Line: 4657
        }
      ],
      Line: 4656
    },
    {
      Name: "",
      Body: [
        {
          Type: "Text",
          Body: "Was kann ich für Sie tun, meine Dame? ",
          Line: 4657
        }
      ],
      Line: 4657
    },
    {
      Name: "MARCELLINE",
      Body: [
        {
          Type: "Text",
          Body: "Ich will Figaro heiraten, das ist alles. ",
          Line: 4661
        }
      ],
      Line: 4660
    },
    {
      Name: "DONGUZMAN",
      Body: [
        {
          Type: "Text",
          Body: "Haben Sie ein schriftliches Heiratsversprechen? ",
          Line: 4665
        }
      ],
      Line: 4664
    },
    {
      Name: "MARCELLINE",
      Body: [
        {
          Type: "Text",
          Body: "Alles, was ich habe, ist dieser Schuldschein. Und das Versprechen des Herrn Grafen. ",
          Line: 4669
        }
      ],
      Line: 4668
    },
    {
      Name: "DONGUZMAN",
      Body: [
        {
          Type: "Regie",
          Body: "nimmt das Papier",
          Line: 4674
        }
      ],
      Line: 4673
    },
    {
      Name: "",
      Body: [
        {
          Type: "Text",
          Body: "Ein gewisser Herr Figaro schuldet Ihnen dreihundert Gulden. Kein Zusatz. ",
          Line: 4674
        }
      ],
      Line: 4674
    },
    {
      Name: "BARTHOLO",
      Body: [
        {
          Type: "Text",
          Body: "Und wenn man einen Zusatz bezüglich der Heirat zusätzlich hinzusetzen würde, Herr Kollege? ",
          Line: 4679
        }
      ],
      Line: 4678
    },
    {
      Name: "DONGUZMAN",
      Body: [
        {
          Type: "Text",
          Body: "Ein solcher Zusatz würde zusätzliche Kosten verursachen, Herr Kollege. ",
          Line: 4684
        }
      ],
      Line: 4683
    },
    {
      Name: "MARCELLINE",
      Body: [
        {
          Type: "Text",
          Body: "Sagen Sie einen Preis. ",
          Line: 4689
        }
      ],
      Line: 4688
    },
    {
      Name: "DONGUZMAN",
      Body: [
        {
          Type: "Text",
          Body: "Da hätten wir den einfachen, aber anfechtbaren Zusatz, für 30 Gulden. ",
          Line: 4693
        }
      ],
      Line: 4692
    },
    {
      Name: "ZETTELKOPF",
      Body: [
        {
          Type: "Text",
          Body: "Notiere 30. ",
          Line: 4698
        }
      ],
      Line: 4697
    },
    {
      Name: "BARTHOLO",
      Body: [
        {
          Type: "Text",
          Body: "Ich würde zu einer etwas besseren Ausführung raten, Madame. ",
          Line: 4702
        }
      ],
      Line: 4701
    },
    {
      Name: "DONGUZMAN",
      Body: [
        {
          Type: "Text",
          Body: "Ganz meine Meinung, Herr Kollege. In diesem Falle käme der beeidete Zusatz, auch Doppelfälscher genannt, in Frage. 60 Gulden. ",
          Line: 4706
        }
      ],
      Line: 4705
    },
    {
      Name: "",
      Body: [
        {
          Type: "Seite",
          Body: "58",
          Line: 4713
        }
      ],
      Line: 4713
    },
    {
      Name: "ZETTELKOPF",
      Body: [
        {
          Type: "Text",
          Body: "Notiere 60. ",
          Line: 4717
        }
      ],
      Line: 4716
    },
    {
      Name: "MARCELLINE",
      Body: [
        {
          Type: "Text",
          Body: "Was meinen Sie, Doktor Bartholo? ",
          Line: 4721
        }
      ],
      Line: 4720
    },
    {
      Name: "BARTHOLO",
      Body: [
        {
          Type: "Text",
          Body: "Ich meine, Sie sollten zugreifen, Madame. Dieser Zusatz erscheint mir zuverlässig und nicht zu auffallend. ",
          Line: 4725
        }
      ],
      Line: 4724
    },
    {
      Name: "MARCELLINE",
      Body: [
        {
          Type: "Text",
          Body: "Also gut, 60 Gulden. ",
          Line: 4730
        }
      ],
      Line: 4729
    },
    {
      Name: "DONGUZMAN",
      Body: [
        {
          Type: "Text",
          Body: "Gratuliere, gnädige Frau. Ich darf noch hinzufügen, daß diese Form des Zusatzes bei Damen der höchsten Gesellschaft reißenden Absatz findet. Madame haben Geschmack. ",
          Line: 4734
        }
      ],
      Line: 4733
    },
    {
      Name: "MARCELLINE",
      Body: [
        {
          Type: "Regie",
          Body: "zahlt sofort",
          Line: 4741
        }
      ],
      Line: 4740
    },
    {
      Name: "",
      Body: [
        {
          Type: "Text",
          Body: "Meine Herren, ich lege mein Schicksal in Ihre Hände. ",
          Line: 4741
        }
      ],
      Line: 4741
    },
    {
      Name: "DONGUZMAN",
      Body: [
        {
          Type: "Text",
          Body: "Vertrauen Sie der Gerechtigkeit. ",
          Line: 4746
        }
      ],
      Line: 4745
    },
    {
      Name: "Regie",
      Body: [
        {
          Type: "Text",
          Body: "Marcelline wendet sich zum Gehen. ",
          Line: 4750
        }
      ],
      Line: 4749
    },
    {
      Name: "BARTHOLO",
      Body: [
        {
          Type: "Text",
          Body: "Mein Anteil, Herr Kollege. ",
          Line: 4754
        }
      ],
      Line: 4753
    },
    {
      Name: "DONGUZMAN",
      Body: [
        {
          Type: "Regie",
          Body: "steckt Bartholo Geld zu",
          Line: 4758
        }
      ],
      Line: 4757
    },
    {
      Name: "",
      Body: [
        {
          Type: "Text",
          Body: "Salve, Herr Kollege. ",
          Line: 4758
        }
      ],
      Line: 4758
    },
    {
      Name: "BARTHOLO",
      Body: [
        {
          Type: "Text",
          Body: "Salvissimo, Herr Kollege. ",
          Line: 4762
        }
      ],
      Line: 4761
    },
    {
      Name: "Regie",
      Body: [
        {
          Type: "Text",
          Body: "Marcelline und Bartholo ab. Figaro auf. ",
          Line: 4766
        }
      ],
      Line: 4765
    },
    {
      Name: "DONGUZMAN",
      Body: [
        {
          Type: "Text",
          Body: "Stehen Sie in irgendeinem Zusammenhang mit diesem Prozeß, junger Mann? ",
          Line: 4770
        }
      ],
      Line: 4769
    },
    {
      Name: "FIGARO",
      Body: [
        {
          Type: "Text",
          Body: "In jedem, mein Herr. Ich bin der Beklagte. ",
          Line: 4775
        }
      ],
      Line: 4774
    },
    {
      Name: "DONGUZMAN",
      Body: [
        {
          Type: "Text",
          Body: "Vortrefflich, mein Herr. ",
          Line: 4779
        },
        {
          Type: "Regie",
          Body: "Zu Zettelkopf",
          Line: 4779
        }
      ],
      Line: 4778
    },
    {
      Name: "",
      Body: [
        {
          Type: "Text",
          Body: "Die nächste Kundschaft. ",
          Line: 4779
        }
      ],
      Line: 4779
    },
    {
      Name: "Regie",
      Body: [
        {
          Type: "Text",
          Body: "Zu Figaro",
          Line: 4780
        }
      ],
      Line: 4780
    },
    {
      Name: "",
      Body: [
        {
          Type: "Text",
          Body: "Welches Urteil schwebt Ihnen so vor, wenn ich fragen darf? ",
          Line: 4780
        }
      ],
      Line: 4780
    },
    {
      Name: "FIGARO",
      Body: [
        {
          Type: "Text",
          Body: "Ein gerechtes! ",
          Line: 4785
        }
      ],
      Line: 4784
    },
    {
      Name: "ZETTELKOPF",
      Body: [
        {
          Type: "Text",
          Body: "Notiere? ",
          Line: 4789
        }
      ],
      Line: 4788
    },
    {
      Name: "DONGUZMAN",
      Body: [
        {
          Type: "Text",
          Body: "Schon, schon, mein Herr. Aber ich meine die Ausführung ... ",
          Line: 4793
        }
      ],
      Line: 4792
    },
    {
      Name: "FIGARO",
      Body: [
        {
          Type: "Text",
          Body: "Schriftlich und stichhaltig! ",
          Line: 4797
        }
      ],
      Line: 4796
    },
    {
      Name: "ZETTELKOPF",
      Body: [
        {
          Type: "Text",
          Body: "Notiere? ",
          Line: 4801
        }
      ],
      Line: 4800
    },
    {
      Name: "DONGUZMAN",
      Body: [
        {
          Type: "Text",
          Body: "Schon, schon, mein Herr aber ich meine die Zeugenaussagen ... ",
          Line: 4805
        }
      ],
      Line: 4804
    },
    {
      Name: "FIGARO",
      Body: [
        {
          Type: "Text",
          Body: "Wahrhaftig! ",
          Line: 4809
        }
      ],
      Line: 4808
    },
    {
      Name: "",
      Body: [
        {
          Type: "Seite",
          Body: "59",
          Line: 4814
        }
      ],
      Line: 4814
    },
    {
      Name: "ZETTELKOPF",
      Body: [
        {
          Type: "Text",
          Body: "Notiere? ",
          Line: 4818
        }
      ],
      Line: 4817
    },
    {
      Name: "DONGUZMAN",
      Body: [
        {
          Type: "Text",
          Body: "Mein Herr, Sie wollen mich nicht verstehen. Ich biete Ihnen ein modernes dynamisches Urteil zu vernünftigen Preisen. ",
          Line: 4822
        }
      ],
      Line: 4821
    },
    {
      Name: "FIGARO",
      Body: [
        {
          Type: "Text",
          Body: "Und ich vertraue auf die gute alte Gerechtigkeit. Die ist gratis. ",
          Line: 4827
        }
      ],
      Line: 4826
    },
    {
      Name: "DONGUZMAN",
      Body: [
        {
          Type: "Text",
          Body: "Der ist schuldig. ",
          Line: 4831
        }
      ],
      Line: 4830
    },
    {
      Name: "ZETTELKOPF",
      Body: [
        {
          Type: "Text",
          Body: "Oder arm. ",
          Line: 4835
        }
      ],
      Line: 4834
    },
    {
      Name: "DONGUZMAN",
      Body: [
        {
          Type: "Text",
          Body: "Dann erst recht. ",
          Line: 4839
        }
      ],
      Line: 4838
    },
    {
      Name: "Regie",
      Body: [
        {
          Type: "Text",
          Body: "Figaro ab. Bazillus kurz auf. ",
          Line: 4843
        }
      ],
      Line: 4842
    },
    {
      Name: "BAZILLUS",
      Body: [
        {
          Type: "Text",
          Body: "Mein Herr Graf läßt fragen, ob alles bereit sei. ",
          Line: 4847
        }
      ],
      Line: 4846
    },
    {
      Name: "DONGUZMAN",
      Body: [
        {
          Type: "Text",
          Body: "Alea jacta est. ",
          Line: 4851
        }
      ],
      Line: 4850
    },
    {
      Name: "ZETTELKOPF",
      Body: [
        {
          Type: "Text",
          Body: "Mein Herr Richter läßt sagen, daß alles soweit sei. ",
          Line: 4855
        }
      ],
      Line: 4854
    },
    {
      Name: "Regie",
      Body: [
        {
          Type: "Text",
          Body: "Allgemeiner Auftritt, Graf, Marcelline, Bartholo, Figaro, Diener. Alle haben Platz genommen. Der Graf steht auf. Alle stehen auf. Der Graf setzt sich. Alle setzen sich. Bazillus reicht dem Grafen einen Zettel. ",
          Line: 4859
        }
      ],
      Line: 4858
    },
    {
      Name: "GRAF",
      Body: [
        {
          Type: "Regie",
          Body: "liest",
          Line: 4866
        }
      ],
      Line: 4865
    },
    {
      Name: "",
      Body: [
        {
          Type: "Text",
          Body: "Bestellschein. Ein Urteil in Sonderausführung ... ",
          Line: 4866
        }
      ],
      Line: 4866
    },
    {
      Name: "Regie",
      Body: [
        {
          Type: "Text",
          Body: "Zu Bazillus",
          Line: 4867
        }
      ],
      Line: 4867
    },
    {
      Name: "",
      Body: [
        {
          Type: "Text",
          Body: "Idiot! Ich erkläre die Verhandlung für eröffnet. ",
          Line: 4867
        }
      ],
      Line: 4867
    },
    {
      Name: "Regie",
      Body: [
        {
          Type: "Text",
          Body: "Zu Guzman",
          Line: 4868
        }
      ],
      Line: 4868
    },
    {
      Name: "",
      Body: [
        {
          Type: "Text",
          Body: "Anfangen! ",
          Line: 4868
        }
      ],
      Line: 4868
    },
    {
      Name: "DONGUZMAN",
      Body: [
        {
          Type: "Regie",
          Body: "zu Zettelkopf",
          Line: 4872
        }
      ],
      Line: 4871
    },
    {
      Name: "",
      Body: [
        {
          Type: "Text",
          Body: "Anfangen! ",
          Line: 4872
        }
      ],
      Line: 4872
    },
    {
      Name: "ZETTELKOPF",
      Body: [
        {
          Type: "Text",
          Body: "Anfangen! ",
          Line: 4876
        }
      ],
      Line: 4875
    },
    {
      Name: "DONGUZMAN",
      Body: [
        {
          Type: "Text",
          Body: "Wir schreiten zur Vorlesung der Anklageschrift. ",
          Line: 4880
        }
      ],
      Line: 4879
    },
    {
      Name: "ZETTELKOPF",
      Body: [
        {
          Type: "Regie",
          Body: "nimmt ein Aktenstück und liest",
          Line: 4884
        }
      ],
      Line: 4883
    },
    {
      Name: "",
      Body: [
        {
          Type: "Text",
          Body: "In der Strafsache Bgl. Z. 234, Schrägstrich 22 b-1234, Nr. 43, 5c bis 87, 8 f., Verord. lf. Nr. 3 456 789 ... ",
          Line: 4884
        }
      ],
      Line: 4884
    },
    {
      Name: "GRAF",
      Body: [
        {
          Type: "Regie",
          Body: "zu Guzman",
          Line: 4890
        }
      ],
      Line: 4889
    },
    {
      Name: "",
      Body: [
        {
          Type: "Text",
          Body: "Et cetera! ",
          Line: 4890
        }
      ],
      Line: 4890
    },
    {
      Name: "DONGUZMAN",
      Body: [
        {
          Type: "Regie",
          Body: "zu Zettelkopf",
          Line: 4894
        }
      ],
      Line: 4893
    },
    {
      Name: "",
      Body: [
        {
          Type: "Text",
          Body: "Et cetera! ",
          Line: 4894
        }
      ],
      Line: 4894
    },
    {
      Name: "",
      Body: [
        {
          Type: "Seite",
          Body: "60",
          Line: 4899
        }
      ],
      Line: 4899
    },
    {
      Name: "ZETTELKOPF",
      Body: [
        {
          Type: "Text",
          Body: "Et cetera! Die klagende, beklagenswerte Marcelline Krautmesser y Barbara y Fiorita y Benedetta y Mandolina y Nicolina y Pepperina y Carmen, mündige Jungfrau ... ",
          Line: 4903
        }
      ],
      Line: 4902
    },
    {
      Name: "STIMME",
      Body: [
        {
          Type: "Regie",
          Body: "Gräfin und Susanne gleichzeitig von hinter der Bühne",
          Line: 4910
        }
      ],
      Line: 4909
    },
    {
      Name: "",
      Body: [
        {
          Type: "Text",
          Body: "Einspruch! ",
          Line: 4910
        }
      ],
      Line: 4910
    },
    {
      Name: "GRAF",
      Body: [
        {
          Type: "Regie",
          Body: "zu Guzman",
          Line: 4914
        }
      ],
      Line: 4913
    },
    {
      Name: "",
      Body: [
        {
          Type: "Text",
          Body: "Ruhe! ",
          Line: 4914
        }
      ],
      Line: 4914
    },
    {
      Name: "DONGUZMAN",
      Body: [
        {
          Type: "Regie",
          Body: "zu Zettelkopf",
          Line: 4918
        }
      ],
      Line: 4917
    },
    {
      Name: "",
      Body: [
        {
          Type: "Text",
          Body: "Ruhe! ",
          Line: 4918
        }
      ],
      Line: 4918
    },
    {
      Name: "ZETTELKOPF",
      Body: [
        {
          Type: "Text",
          Body: "Ruhe! ",
          Line: 4922
        }
      ],
      Line: 4921
    },
    {
      Name: "DONGUZMAN",
      Body: [
        {
          Type: "Text",
          Body: "Silentium, wenn ich bitten darf. ",
          Line: 4926
        }
      ],
      Line: 4925
    },
    {
      Name: "ZETTELKOPF",
      Body: [
        {
          Type: "Regie",
          Body: "liest",
          Line: 4930
        }
      ],
      Line: 4929
    },
    {
      Name: "",
      Body: [
        {
          Type: "Text",
          Body: "Die klagende, beklagenswerte Marcelline Krautmesser y Barbara y Fiorita y Benedetta y Mandolina y Pepperina y Carmen ... bla ... bla ... bla gegen den kläglichen Beklagten Figaro y ... hier fehlt Zuname. ",
          Line: 4930
        }
      ],
      Line: 4930
    },
    {
      Name: "FIGARO",
      Body: [
        {
          Type: "Text",
          Body: "Figaro. ",
          Line: 4937
        }
      ],
      Line: 4936
    },
    {
      Name: "DONGUZMAN",
      Body: [
        {
          Type: "Text",
          Body: "Und der Vorname? ",
          Line: 4941
        }
      ],
      Line: 4940
    },
    {
      Name: "FIGARO",
      Body: [
        {
          Type: "Text",
          Body: "Figaro. ",
          Line: 4945
        }
      ],
      Line: 4944
    },
    {
      Name: "DONGUZMAN",
      Body: [
        {
          Type: "Text",
          Body: "Wollen Sie mich hochnehmen, Herr? ",
          Line: 4949
        }
      ],
      Line: 4948
    },
    {
      Name: "FIGARO",
      Body: [
        {
          Type: "Text",
          Body: "Das läge tief unter meinem Witz, Herr. ",
          Line: 4953
        }
      ],
      Line: 4952
    },
    {
      Name: "GRAF",
      Body: [
        {
          Type: "Text",
          Body: "Der Kerl fühlt sich ja sehr sicher. ",
          Line: 4957
        },
        {
          Type: "Regie",
          Body: "Zu Don Guzman",
          Line: 4957
        }
      ],
      Line: 4956
    },
    {
      Name: "",
      Body: [
        {
          Type: "Text",
          Body: "Weitermachen! ",
          Line: 4958
        }
      ],
      Line: 4958
    },
    {
      Name: "DONGUZMAN",
      Body: [
        {
          Type: "Text",
          Body: "Weitermachen! ",
          Line: 4962
        },
        {
          Type: "Regie",
          Body: "Zu Figaro",
          Line: 4962
        }
      ],
      Line: 4961
    },
    {
      Name: "",
      Body: [
        {
          Type: "Text",
          Body: "Ihr Stand? ",
          Line: 4962
        }
      ],
      Line: 4962
    },
    {
      Name: "FIGARO",
      Body: [
        {
          Type: "Text",
          Body: "Ein Zufall. ",
          Line: 4966
        }
      ],
      Line: 4965
    },
    {
      Name: "DONGUZMAN",
      Body: [
        {
          Type: "Text",
          Body: "Seit wann ist der Zufall ein Stand? ",
          Line: 4970
        }
      ],
      Line: 4969
    },
    {
      Name: "FIGARO",
      Body: [
        {
          Type: "Text",
          Body: "Seit der Stand ein Zufall ist. Denn wäre ich zufällig in einem feineren Bett geboren, so wäre ich zufällig ein Edelmann und hätte zufällig genug Geld, den Zufall der Gerechtigkeit etwas weniger zufällig zu machen. ",
          Line: 4974
        }
      ],
      Line: 4973
    },
    {
      Name: "GRAF",
      Body: [
        {
          Type: "Regie",
          Body: "zu Guzman",
          Line: 4981
        }
      ],
      Line: 4980
    },
    {
      Name: "",
      Body: [
        {
          Type: "Text",
          Body: "Schluß, sage ich! ",
          Line: 4981
        }
      ],
      Line: 4981
    },
    {
      Name: "DONGUZMAN",
      Body: [
        {
          Type: "Regie",
          Body: "zu Zettelkopf",
          Line: 4985
        }
      ],
      Line: 4984
    },
    {
      Name: "",
      Body: [
        {
          Type: "Text",
          Body: "Schluß, sage ich! ",
          Line: 4985
        }
      ],
      Line: 4985
    },
    {
      Name: "BARTHOLO",
      Body: [
        {
          Type: "Regie",
          Body: "zu Figaro",
          Line: 4989
        }
      ],
      Line: 4988
    },
    {
      Name: "",
      Body: [
        {
          Type: "Text",
          Body: "Jetzt reicht's! ",
          Line: 4989
        }
      ],
      Line: 4989
    },
    {
      Name: "ZETTELKOPF",
      Body: [
        {
          Type: "Regie",
          Body: "liest weiter",
          Line: 4993
        }
      ],
      Line: 4992
    },
    {
      Name: "",
      Body: [
        {
          Type: "Text",
          Body: "Wegen Einspruchserhebung der obgenannten mündigen Jungfrau Marcelline Krautmesser y Barbara y Fiorita y...y...y...y... Carmen gegen die Eheschließung des obgenannten Figaro. Die soeben obgenannte mündige Jungfrau Marcelline ",
          Line: 4993
        }
      ],
      Line: 4993
    },
    {
      Name: "",
      Body: [
        {
          Type: "Seite",
          Body: "61",
          Line: 5002
        }
      ],
      Line: 5002
    },
    {
      Name: "ZETTELKOPF",
      Body: [
        {
          Type: "Text",
          Body: "wird vertreten durch den edlen, hochedlen, besonders edlen Doktor Bartholo. ",
          Line: 5006
        }
      ],
      Line: 5005
    },
    {
      Name: "BARTHOLO",
      Body: [
        {
          Type: "Regie",
          Body: "steht auf, verbeugt sich und setzt sich wieder",
          Line: 5011
        }
      ],
      Line: 5010
    },
    {
      Name: "",
      Body: [],
      Line: 5012
    },
    {
      Name: "ZETTELKOPF",
      Body: [
        {
          Type: "Text",
          Body: "Der ebenfalls obgenannte Figaro ... ",
          Line: 5015
        }
      ],
      Line: 5014
    },
    {
      Name: "FIGARO",
      Body: [
        {
          Type: "Regie",
          Body: "Figaro steht auf und setzt sich",
          Line: 5019
        }
      ],
      Line: 5018
    },
    {
      Name: "",
      Body: [],
      Line: 5020
    },
    {
      Name: "ZETTELKOPF",
      Body: [
        {
          Type: "Text",
          Body: "... wird vertreten durch den soeben genannten Figaro. ",
          Line: 5023
        }
      ],
      Line: 5022
    },
    {
      Name: "FIGARO",
      Body: [
        {
          Type: "Regie",
          Body: "steht auf",
          Line: 5027
        }
      ],
      Line: 5026
    },
    {
      Name: "",
      Body: [
        {
          Type: "Text",
          Body: "Was auf gut spanisch heißt, daß ich mich selbst vertrete. ",
          Line: 5027
        }
      ],
      Line: 5027
    },
    {
      Name: "BARTHOLO",
      Body: [
        {
          Type: "Text",
          Body: "Ich erhebe Einspruch. Er braucht einen Rechtsbeistand. Alles andere ist wider den Gebrauch. ",
          Line: 5031
        }
      ],
      Line: 5030
    },
    {
      Name: "FIGARO",
      Body: [
        {
          Type: "Text",
          Body: "Dieser Brauch, edler, hochedler, besonders edler Doktor Bartholo, ist oft nur ein Mißbrauch. ",
          Line: 5036
        },
        {
          Type: "Regie",
          Body: "Zum Gericht",
          Line: 5038
        }
      ],
      Line: 5035
    },
    {
      Name: "",
      Body: [
        {
          Type: "Text",
          Body: "Was hilft mir die Hilfe eines Advokaten, der sich in den weichen Rundungen der Paragraphen weit wohler fühlt als auf dem harten Boden der Tatsachen. Der mir den kalten Schweiß auf seiner Stirne für den Ausdruck seiner Überzeugung verkauft. Der die Länge seines Plädoyers an der Höhe seines Verdienstes mißt. Mit diesen Herren, meine Herren, verhält es sich wie mit allen Herren, meine Herren, die den Gestank ihrer Seele mit dem feinen Damast ihres Kleides zu veredeln trachten. ",
          Line: 5038
        }
      ],
      Line: 5038
    },
    {
      Name: "GRAF",
      Body: [
        {
          Type: "Regie",
          Body: "zu Guzman",
          Line: 5050
        }
      ],
      Line: 5049
    },
    {
      Name: "",
      Body: [
        {
          Type: "Text",
          Body: "Unerhört! ",
          Line: 5050
        }
      ],
      Line: 5050
    },
    {
      Name: "DONGUZMAN",
      Body: [
        {
          Type: "Regie",
          Body: "zu Zettelkopf",
          Line: 5054
        }
      ],
      Line: 5053
    },
    {
      Name: "",
      Body: [
        {
          Type: "Text",
          Body: "Unerhört! ",
          Line: 5054
        }
      ],
      Line: 5054
    },
    {
      Name: "ZETTELKOPF",
      Body: [
        {
          Type: "Regie",
          Body: "zum Gerichtsdiener",
          Line: 5058
        }
      ],
      Line: 5057
    },
    {
      Name: "",
      Body: [
        {
          Type: "Text",
          Body: "Unerhört! ",
          Line: 5058
        }
      ],
      Line: 5058
    },
    {
      Name: "BARTHOLO",
      Body: [
        {
          Type: "Text",
          Body: "Bedenklich. ",
          Line: 5062
        }
      ],
      Line: 5061
    },
    {
      Name: "FIGARO",
      Body: [
        {
          Type: "Text",
          Body: "Erlauben Sie, daß ich meinen Fall mit wenigen Worten ... ",
          Line: 5066
        }
      ],
      Line: 5065
    },
    {
      Name: "DONGUZMAN",
      Body: [
        {
          Type: "Text",
          Body: "Das waren schon zu viele Worte. Als Angeklagter haben Sie nur zu reden, wenn Sie gefragt werden. ",
          Line: 5070
        }
      ],
      Line: 5069
    },
    {
      Name: "FIGARO",
      Body: [
        {
          Type: "Text",
          Body: "Der Angeklagte schweigt. Als Anwalt des Angeklagten möchte ich bemerken ... ",
          Line: 5075
        }
      ],
      Line: 5074
    },
    {
      Name: "DONGUZMAN",
      Body: [
        {
          Type: "Text",
          Body: "Ich stelle fest, daß ihre ständigen Bemerkungen den Lauf der Verhandlung stören. ",
          Line: 5080
        }
      ],
      Line: 5079
    },
    {
      Name: "",
      Body: [
        {
          Type: "Seite",
          Body: "62",
          Line: 5086
        }
      ],
      Line: 5086
    },
    {
      Name: "FIGARO",
      Body: [
        {
          Type: "Text",
          Body: "Ich meine, daß sie den Lauf der Gerechtigkeit fördern. ",
          Line: 5090
        }
      ],
      Line: 5089
    },
    {
      Name: "DONGUZMAN",
      Body: [
        {
          Type: "Text",
          Body: "Los, Zettelkopf, wir schreiten zur Verlesung des fraglichen Dokumentes. ",
          Line: 5094
        }
      ],
      Line: 5093
    },
    {
      Name: "ZETTELKOPF",
      Body: [
        {
          Type: "Regie",
          Body: "liest",
          Line: 5099
        }
      ],
      Line: 5098
    },
    {
      Name: "",
      Body: [
        {
          Type: "Text",
          Body: "Ich, Unterzeichneter, Figaro, bestätige hiermit, von der mündigen Jungfrau Marcelline Krautmesser et cetera et cetera die Summe von dreihundert vergammelten Gulden erhalten zu haben, welche ich ihr zurückerstatten werde ... ",
          Line: 5099
        }
      ],
      Line: 5099
    },
    {
      Name: "FIGARO",
      Body: [
        {
          Type: "Text",
          Body: "Stimmt! ",
          Line: 5107
        }
      ],
      Line: 5106
    },
    {
      Name: "ZETTELKOPF",
      Body: [
        {
          Type: "Text",
          Body: "... sowie ich sie heiraten werde. Beeideter Zusatz. ",
          Line: 5111
        }
      ],
      Line: 5110
    },
    {
      Name: "FIGARO",
      Body: [
        {
          Type: "Text",
          Body: "Falsch. Von Heirat war nie die Rede. ",
          Line: 5115
        }
      ],
      Line: 5114
    },
    {
      Name: "BARTHOLO",
      Body: [
        {
          Type: "Text",
          Body: "Hohes und schönes Gericht! Wieder einer jener erschütternden Fälle von Sittenlosigkeit, wie sie in der heutigen spanischen Jugend mehr und mehr um sich greifen. Da verspricht ein junger, gewissenloser Mensch einer reifen und unschuldigen Dame die Ehe ... ",
          Line: 5119
        }
      ],
      Line: 5118
    },
    {
      Name: "FIGARO",
      Body: [
        {
          Type: "Text",
          Body: "Ich opponiere. Der Zusatz ist gefälscht! ",
          Line: 5127
        }
      ],
      Line: 5126
    },
    {
      Name: "ZETTELKOPF",
      Body: [
        {
          Type: "Text",
          Body: "Ich repetiere. Der Zusatz ist beeidet! ",
          Line: 5131
        }
      ],
      Line: 5130
    },
    {
      Name: "Regie",
      Body: [
        {
          Type: "Text",
          Body: "Zettelkopf reicht Don Guzman das Dokument. Don Guzman reicht es dem Grafen. ",
          Line: 5135
        }
      ],
      Line: 5134
    },
    {
      Name: "GRAF",
      Body: [
        {
          Type: "Text",
          Body: "Alles bestens. ",
          Line: 5140
        },
        {
          Type: "Regie",
          Body: "Der Graf gibt Don Guzman das Dokument zurück.",
          Line: 5141
        }
      ],
      Line: 5139
    },
    {
      Name: "",
      Body: [],
      Line: 5142
    },
    {
      Name: "DONGUZMAN",
      Body: [
        {
          Type: "Text",
          Body: "Alles rechtens. Der Zusatz ist echt. ",
          Line: 5145
        }
      ],
      Line: 5144
    },
    {
      Name: "FIGARO",
      Body: [
        {
          Type: "Text",
          Body: "Falsch! ",
          Line: 5149
        }
      ],
      Line: 5148
    },
    {
      Name: "GRAF",
      Body: [
        {
          Type: "Text",
          Body: "Als oberster Richter von Kastilien sage ich, der Zusatz ist echt. Will er die Entscheidung eines spanischen Granden angreifen? Ich lasse ihn auspeitschen. ",
          Line: 5153
        }
      ],
      Line: 5152
    },
    {
      Name: "FIGARO",
      Body: [
        {
          Type: "Text",
          Body: "Herr Graf, das Recht ist so sehr auf Eurer Seite wie die Macht. Also habt Ihr die Macht, recht zu haben. ",
          Line: 5159
        }
      ],
      Line: 5158
    },
    {
      Name: "BARTHOLO",
      Body: [
        {
          Type: "Text",
          Body: "Wir plädieren auf sofortige Einlösung des Vertrages. Also zahlen und heiraten. ",
          Line: 5164
        }
      ],
      Line: 5163
    },
    {
      Name: "FIGARO",
      Body: [
        {
          Type: "Regie",
          Body: "für sich",
          Line: 5169
        }
      ],
      Line: 5168
    },
    {
      Name: "",
      Body: [
        {
          Type: "Text",
          Body: "Satan und Syntax, steht mir bei! ",
          Line: 5169
        }
      ],
      Line: 5169
    },
    {
      Name: "Regie",
      Body: [
        {
          Type: "Text",
          Body: "laut",
          Line: 5169
        }
      ],
      Line: 5169
    },
    {
      Name: "",
      Body: [
        {
          Type: "Text",
          Body: "Und wir plädieren, den Wortlaut des vorliegenden Dokumentes aufs genaueste zu untersuchen. ",
          Line: 5170
        }
      ],
      Line: 5170
    },
    {
      Name: "",
      Body: [
        {
          Type: "Seite",
          Body: "63",
          Line: 5176
        }
      ],
      Line: 5176
    },
    {
      Name: "DONGUZMAN",
      Body: [
        {
          Type: "Text",
          Body: "Was will er damit sagen? ",
          Line: 5180
        }
      ],
      Line: 5179
    },
    {
      Name: "FIGARO",
      Body: [
        {
          Type: "Text",
          Body: "Was will das Dokument besagen? Daß ich die dreihundert Gulden zurückerstatten werde sowie ich sie heiraten werde. Das kann doch nur heißen: sobald. Ich zahle, sobald ich heirate. Da ich nicht heirate, brauche ich auch nicht zu zahlen. ",
          Line: 5184
        }
      ],
      Line: 5183
    },
    {
      Name: "BARTHOLO",
      Body: [
        {
          Type: "Text",
          Body: "Wir stellen fest, daß es sich bei diesem »sowie« um die sogenannte coniunctio copulativa »und« handelt. Also zahlen und heiraten. ",
          Line: 5192
        }
      ],
      Line: 5191
    },
    {
      Name: "FIGARO",
      Body: [
        {
          Type: "Text",
          Body: "Und wir behaupten, daß es sich dabei um die sogenannte coniunctio temporalis »sobald« handelt. Also: Sobald ich heirate, zahle ich. ",
          Line: 5198
        }
      ],
      Line: 5197
    },
    {
      Name: "ZETTELKOPF",
      Body: [
        {
          Type: "Regie",
          Body: "zu Don Guzman",
          Line: 5204
        }
      ],
      Line: 5203
    },
    {
      Name: "",
      Body: [
        {
          Type: "Text",
          Body: "Coniunctio copulativa oder coniunctio temporalis? ",
          Line: 5204
        }
      ],
      Line: 5204
    },
    {
      Name: "DONGUZMAN",
      Body: [
        {
          Type: "Regie",
          Body: "zum Grafen",
          Line: 5209
        }
      ],
      Line: 5208
    },
    {
      Name: "",
      Body: [
        {
          Type: "Text",
          Body: "Coniunctio copulativa oder coniunctio temporalis? ",
          Line: 5209
        }
      ],
      Line: 5209
    },
    {
      Name: "GRAF",
      Body: [
        {
          Type: "Regie",
          Body: "zu Bazillus",
          Line: 5214
        }
      ],
      Line: 5213
    },
    {
      Name: "",
      Body: [
        {
          Type: "Text",
          Body: "Coniunctio copulativa oder coniunctio temporalis? ",
          Line: 5214
        }
      ],
      Line: 5214
    },
    {
      Name: "BAZILLUS",
      Body: [
        {
          Type: "Regie",
          Body: "flüstert dem Grafen etwas zu",
          Line: 5219
        }
      ],
      Line: 5218
    },
    {
      Name: "",
      Body: [],
      Line: 5220
    },
    {
      Name: "GRAF",
      Body: [
        {
          Type: "Regie",
          Body: "zu Don Guzman",
          Line: 5223
        }
      ],
      Line: 5222
    },
    {
      Name: "",
      Body: [
        {
          Type: "Text",
          Body: "Lecken Sie mich am Arsch! ",
          Line: 5223
        }
      ],
      Line: 5223
    },
    {
      Name: "DONGUZMAN",
      Body: [
        {
          Type: "Regie",
          Body: "zu Zettelkopf",
          Line: 5227
        }
      ],
      Line: 5226
    },
    {
      Name: "",
      Body: [
        {
          Type: "Text",
          Body: "Er soll mich am Arsch lecken! ",
          Line: 5227
        }
      ],
      Line: 5227
    },
    {
      Name: "ZETTELKOPF",
      Body: [
        {
          Type: "Regie",
          Body: "zu Figaro und Bartholo",
          Line: 5232
        }
      ],
      Line: 5231
    },
    {
      Name: "",
      Body: [
        {
          Type: "Text",
          Body: "Die Herren mögen ihre Zungen sprechen lassen. ",
          Line: 5232
        }
      ],
      Line: 5232
    },
    {
      Name: "BARTHOLO",
      Body: [
        {
          Type: "Text",
          Body: "Mit Vergnügen! Wie heißt es so schön im besagten Dokument? 'Welche Summe ich zurückerstatten werde.' Das ist doch dasselbe, als wenn ich sagen würde: 'Du wirst Genesung finden, sowie ein Arzt dir Medizin gibt.' Das heißt doch: 'Kaum kommt der Arzt, und schon bist du gesund', also und. ",
          Line: 5237
        }
      ],
      Line: 5236
    },
    {
      Name: "FIGARO",
      Body: [
        {
          Type: "Text",
          Body: "Irrtum, Herr Medikus. Der Sinn ist nämlich der: 'Du wirst erbärmlich verrecken, sowie einer dieser gewissen Ärzte an dein Bett tritt.' Das heißt doch: 'Sobald der Arzt kommt, wird gestorben', also sobald. ",
          Line: 5246
        }
      ],
      Line: 5245
    },
    {
      Name: "BARTHOLO",
      Body: [
        {
          Type: "Text",
          Body: "Und ich sage, gleich et, wie die Lateiner sagen. ",
          Line: 5253
        }
      ],
      Line: 5252
    },
    {
      Name: "FIGARO",
      Body: [
        {
          Type: "Text",
          Body: "Und ich sage sobald, sobald, Sie lateinische Krähe. ",
          Line: 5257
        }
      ],
      Line: 5256
    },
    {
      Name: "",
      Body: [
        {
          Type: "Seite",
          Body: "64",
          Line: 5262
        }
      ],
      Line: 5262
    },
    {
      Name: "BARTHOLO",
      Body: [
        {
          Type: "Text",
          Body: "Mein Herr, Sie belieben, mich zu beleidigen. ",
          Line: 5266
        }
      ],
      Line: 5265
    },
    {
      Name: "FIGARO",
      Body: [
        {
          Type: "Text",
          Body: "Mein Herr, ich beliebe mich zu verteidigen. ",
          Line: 5270
        }
      ],
      Line: 5269
    },
    {
      Name: "BARTHOLO",
      Body: [
        {
          Type: "Text",
          Body: "Meine Herren! Hohes und schönes Gericht! Ich beantrage, sofort mit der Punktuation des Ehevertrages zu beginnen. ",
          Line: 5274
        }
      ],
      Line: 5273
    },
    {
      Name: "GRAF",
      Body: [
        {
          Type: "Text",
          Body: "Angenommen. ",
          Line: 5280
        }
      ],
      Line: 5279
    },
    {
      Name: "DONGUZMAN",
      Body: [
        {
          Type: "Text",
          Body: "Angenommen. ",
          Line: 5284
        }
      ],
      Line: 5283
    },
    {
      Name: "ZETTELKOPF",
      Body: [
        {
          Type: "Text",
          Body: "Akzeptiert. ",
          Line: 5288
        }
      ],
      Line: 5287
    },
    {
      Name: "FIGARO",
      Body: [
        {
          Type: "Text",
          Body: "Und angenommen, ich beantrage, die Punktuation des Ehevertrages zu verschieben? ",
          Line: 5292
        }
      ],
      Line: 5291
    },
    {
      Name: "GRAF",
      Body: [
        {
          Type: "Text",
          Body: "Abgewiesen. ",
          Line: 5297
        }
      ],
      Line: 5296
    },
    {
      Name: "DONGUZMAN",
      Body: [
        {
          Type: "Text",
          Body: "Abgewiesen. ",
          Line: 5301
        }
      ],
      Line: 5300
    },
    {
      Name: "FIGARO",
      Body: [
        {
          Type: "Text",
          Body: "Kapiert. ",
          Line: 5305
        }
      ],
      Line: 5304
    },
    {
      Name: "GRAF",
      Body: [
        {
          Type: "Text",
          Body: "Das Urteil. Ich will das Urteil hören. ",
          Line: 5309
        }
      ],
      Line: 5308
    },
    {
      Name: "DONGUZMAN",
      Body: [
        {
          Type: "Text",
          Body: "Selbstverständlich, das Urteil. Sofort. Im Namen Gottes, des spanischen Königs, seiner Exzellenz des Grafen von Almaviva und weiters im Namen der Gerechtigkeit verkünden wir das folgende und gebührenpflichtige Urteil: Die beklagte Partei hat der klagenden Partei die Summe von dreihundert Gulden zurückzuerstatten, sowie ... ",
          Line: 5313
        }
      ],
      Line: 5312
    },
    {
      Name: "BARTHOLO",
      Body: [
        {
          Type: "Text",
          Body: "Coniunctio copulativa! ",
          Line: 5323
        }
      ],
      Line: 5322
    },
    {
      Name: "ZETTELKOPF",
      Body: [
        {
          Type: "Text",
          Body: "... die beklagte Partei die klagende Partei zu heiraten hat. ",
          Line: 5327
        }
      ],
      Line: 5326
    },
    {
      Name: "GRAF",
      Body: [
        {
          Type: "Text",
          Body: "Auf der Stelle. ",
          Line: 5332
        }
      ],
      Line: 5331
    },
    {
      Name: "DONGUZMAN",
      Body: [
        {
          Type: "Text",
          Body: "Selbstverständlich, auf der Stelle, sofort. ",
          Line: 5336
        }
      ],
      Line: 5335
    },
    {
      Name: "MARCELLINE",
      Body: [
        {
          Type: "Text",
          Body: "Das ist der schönste Tag in meinem Leben. ",
          Line: 5340
        },
        {
          Type: "Regie",
          Body: "Zu Figaro",
          Line: 5341
        }
      ],
      Line: 5339
    },
    {
      Name: "",
      Body: [
        {
          Type: "Text",
          Body: "Geliebter! ",
          Line: 5341
        }
      ],
      Line: 5341
    },
    {
      Name: "FIGARO",
      Body: [
        {
          Type: "Text",
          Body: "Was? Ich soll diesen geräucherten Lachs heiraten? Herr Graf, wollen Sie einen jungen, unschuldigen Diener in die zittrigen Arme des Verderbens werfen? ",
          Line: 5345
        }
      ],
      Line: 5344
    },
    {
      Name: "Regie",
      Body: [
        {
          Type: "Text",
          Body: "Figaros Sätze werden vom Gelächter der anderen begleitet. ",
          Line: 5351
        }
      ],
      Line: 5350
    },
    {
      Name: "GRAF",
      Body: [
        {
          Type: "Text",
          Body: "Nun, wer hängt jetzt in der Schlinge, Figaro? ",
          Line: 5355
        }
      ],
      Line: 5354
    },
    {
      Name: "FIGARO",
      Body: [
        {
          Type: "Text",
          Body: "Beim Schweiße meines Angesichts, ich werde die ",
          Line: 5359
        }
      ],
      Line: 5358
    },
    {
      Name: "",
      Body: [
        {
          Type: "Seite",
          Body: "65",
          Line: 5364
        }
      ],
      Line: 5364
    },
    {
      Name: "FIGARO",
      Body: [
        {
          Type: "Text",
          Body: "dreihundert Gulden zahlen, auf Heller und Kopeken. Aber werfen Sie mich um Gottes willen nicht in den Rachen dieser sibirischen Hyäne. Denken Sie an Susanne, Herr Graf, die Ihnen gewiß sehr dankbar sein wird. ",
          Line: 5368
        }
      ],
      Line: 5367
    },
    {
      Name: "GRAF",
      Body: [
        {
          Type: "Text",
          Body: "Ich werde ihre Dankbarkeit gewiß sehr zu schätzen wissen. Du heiratest Marcelline! Die Verhandlung ist beendet. ",
          Line: 5375
        }
      ],
      Line: 5374
    },
    {
      Name: "FIGARO",
      Body: [
        {
          Type: "Text",
          Body: "Halt! Ich werde diese Großmutter niemals heiraten. Ich liebe Susanne. ",
          Line: 5380
        }
      ],
      Line: 5379
    },
    {
      Name: "BARTHOLO",
      Body: [
        {
          Type: "Text",
          Body: "Ist Ihnen der Witz ausgegangen, Herr Figaro? ",
          Line: 5385
        }
      ],
      Line: 5384
    },
    {
      Name: "GRAF",
      Body: [
        {
          Type: "Text",
          Body: "Ich sage, die Verhandlung ist geschlossen! Der Saal soll sofort für die Hochzeit hergerichtet werden. ",
          Line: 5389
        }
      ],
      Line: 5388
    },
    {
      Name: "FIGARO",
      Body: [
        {
          Type: "Text",
          Body: "Ihr stecht mich, Ihr reißt mich an den Hörnern! ",
          Line: 5394
        }
      ],
      Line: 5393
    },
    {
      Name: "Regie",
      Body: [
        {
          Type: "Text",
          Body: "Lautes Gelächter. ",
          Line: 5398
        }
      ],
      Line: 5397
    },
    {
      Name: "FIGARO",
      Body: [
        {
          Type: "Text",
          Body: "Eine Gerechtigkeit klebt an Euren Fingern, vor der mir übel wird. Ich werde meinen Witz in Gift verwandeln und meinen Zorn in spitze Weidenruten. Luft! Luft! In Spanien wird die Gerechtigkeit abgetrieben! Zerschlagt die Hirne an den Fassaden! Mit euren Därmen schreiben wir 'lang lebe der König', bis die Sonne alles verbrennt. Ich liebe Susanne. Ich zerschlage euch. Ich zerschlage euch. ",
          Line: 5402
        }
      ],
      Line: 5401
    },
    {
      Name: "Regie",
      Body: [
        {
          Type: "Text",
          Body: "Alle ab. Susanne und Gräfin auf. ",
          Line: 5413
        }
      ],
      Line: 5412
    },
    {
      Name: "SUSANNE",
      Body: [
        {
          Type: "Text",
          Body: "Sie haben ihn verurteilt, Frau Gräfin. ",
          Line: 5417
        }
      ],
      Line: 5416
    },
    {
      Name: "GREFIN",
      Body: [
        {
          Type: "Text",
          Body: "Verurteilt? ",
          Line: 5421
        }
      ],
      Line: 5420
    },
    {
      Name: "SUSANNE",
      Body: [
        {
          Type: "Text",
          Body: "Er soll noch diesen Abend Marcelline heiraten. ",
          Line: 5425
        }
      ],
      Line: 5424
    },
    {
      Name: "GREFIN",
      Body: [
        {
          Type: "Text",
          Body: "Das verstehe ich nicht. ",
          Line: 5429
        }
      ],
      Line: 5428
    },
    {
      Name: "SUSANNE",
      Body: [
        {
          Type: "Text",
          Body: "Oh, ich verstehe sehr gut. Herr Graf haben keinen Appetit mehr auf seine Magd. ",
          Line: 5433
        }
      ],
      Line: 5432
    },
    {
      Name: "GREFIN",
      Body: [
        {
          Type: "Text",
          Body: "Das glaube ich nicht. Hast du meinem Mann ein Rendezvous versprochen? ",
          Line: 5438
        }
      ],
      Line: 5437
    },
    {
      Name: "SUSANNE",
      Body: [
        {
          Type: "Text",
          Body: "Für Mitternacht. Im Park. Helfen Sie uns, Frau Gräfin. ",
          Line: 5443
        }
      ],
      Line: 5442
    },
    {
      Name: "GREFIN",
      Body: [
        {
          Type: "Text",
          Body: "Beruhige dich, Susanne: Noch ist nichts verloren. ",
          Line: 5447
        }
      ],
      Line: 5446
    },
    {
      Name: "",
      Body: [
        {
          Type: "Seite",
          Body: "66",
          Line: 5452
        }
      ],
      Line: 5452
    },
    {
      Name: "SUSANNE",
      Body: [
        {
          Type: "Text",
          Body: "Nichts verloren? Es ist Abend. Was wird aus meiner Hochzeit? ",
          Line: 5456
        }
      ],
      Line: 5455
    },
    {
      Name: "GREFIN",
      Body: [
        {
          Type: "Text",
          Body: "Wir müssen alles versuchen. Du gehst sofort zum Grafen und bittest ihn, Figaro freizugeben. ",
          Line: 5460
        }
      ],
      Line: 5459
    },
    {
      Name: "SUSANNE",
      Body: [
        {
          Type: "Text",
          Body: "Er wird nein sagen. ",
          Line: 5465
        }
      ],
      Line: 5464
    },
    {
      Name: "GREFIN",
      Body: [
        {
          Type: "Text",
          Body: "Er wird ja sagen, wenn du tust, was er will. ",
          Line: 5469
        }
      ],
      Line: 5468
    },
    {
      Name: "SUSANNE",
      Body: [
        {
          Type: "Text",
          Body: "Er wird das, was er will, sofort wollen. ",
          Line: 5473
        }
      ],
      Line: 5472
    },
    {
      Name: "GREFIN",
      Body: [
        {
          Type: "Text",
          Body: "Sag ja. Sag ihm, daß du ihn sofort im Park erwartest. Ich werde mich inzwischen dort verstecken. Komm, Susanne, ich brauche dein Kleid. ",
          Line: 5477
        }
      ],
      Line: 5476
    },
    {
      Name: "SUSANNE",
      Body: [
        {
          Type: "Text",
          Body: "Ich habe Angst, Frau Gräfin. ",
          Line: 5483
        }
      ],
      Line: 5482
    },
    {
      Name: "GREFIN",
      Body: [
        {
          Type: "Text",
          Body: "Du mußt stark sein, Susanne. ",
          Line: 5487
        }
      ],
      Line: 5486
    },
    {
      Name: "",
      Body: [
        {
          Type: "Einstellung",
          Body: "Umbau",
          Line: 5490
        }
      ],
      Line: 5490
    },
    {
      Name: "Regie",
      Body: [
        {
          Type: "Text",
          Body: "Die beiden ab. Der Saal wird geschmückt. Graf und Bazillus auf. ",
          Line: 5493
        }
      ],
      Line: 5492
    },
    {
      Name: "",
      Body: [
        {
          Type: "Einstellung",
          Body: "Couch",
          Line: 5498
        }
      ],
      Line: 5498
    },
    {
      Name: "BAZILLUS",
      Body: [
        {
          Type: "Text",
          Body: "Susanne muß jeden Augenblick hier sein, Herr Graf. ",
          Line: 5501
        }
      ],
      Line: 5500
    },
    {
      Name: "GRAF",
      Body: [
        {
          Type: "Text",
          Body: "Dieser Augenblick zieht sich in die Länge wie der Schwanz eines andalusischen Esels. ",
          Line: 5505
        }
      ],
      Line: 5504
    },
    {
      Name: "BAZILLUS",
      Body: [
        {
          Type: "Text",
          Body: "Warten erhöht die Lust, Herr Graf. ",
          Line: 5510
        }
      ],
      Line: 5509
    },
    {
      Name: "GRAF",
      Body: [
        {
          Type: "Text",
          Body: "Ich habe wenig Lust, zu warten. ",
          Line: 5514
        }
      ],
      Line: 5513
    },
    {
      Name: "BAZILLUS",
      Body: [
        {
          Type: "Text",
          Body: "Wie werden Herr Graf die Copulation vornehmen? ",
          Line: 5518
        }
      ],
      Line: 5517
    },
    {
      Name: "GRAF",
      Body: [
        {
          Type: "Text",
          Body: "Zuerst eine anständige Züchtigung. ",
          Line: 5522
        }
      ],
      Line: 5521
    },
    {
      Name: "BAZILLUS",
      Body: [
        {
          Type: "Text",
          Body: "Wie geschmackvoll! ",
          Line: 5526
        }
      ],
      Line: 5525
    },
    {
      Name: "GRAF",
      Body: [
        {
          Type: "Text",
          Body: "Dann reiße ich ihr die Kleider vom Leibe. ",
          Line: 5530
        }
      ],
      Line: 5529
    },
    {
      Name: "BAZILLUS",
      Body: [
        {
          Type: "Text",
          Body: "Wie originell! ",
          Line: 5534
        }
      ],
      Line: 5533
    },
    {
      Name: "GRAF",
      Body: [
        {
          Type: "Text",
          Body: "Hoffentlich hat sie keine Läuse? ",
          Line: 5538
        }
      ],
      Line: 5537
    },
    {
      Name: "BAZILLUS",
      Body: [
        {
          Type: "Text",
          Body: "Wie vorsichtig! ",
          Line: 5542
        }
      ],
      Line: 5541
    },
    {
      Name: "GRAF",
      Body: [
        {
          Type: "Text",
          Body: "Die Beine auseinander. ",
          Line: 5546
        }
      ],
      Line: 5545
    },
    {
      Name: "BAZILLUS",
      Body: [
        {
          Type: "Text",
          Body: "Wie galant! ",
          Line: 5550
        }
      ],
      Line: 5549
    },
    {
      Name: "GRAF",
      Body: [
        {
          Type: "Text",
          Body: "Und dann vorwärts, spanische Kavallerie! Hipp! ",
          Line: 5554
        }
      ],
      Line: 5553
    },
    {
      Name: "BAZILLUS",
      Body: [
        {
          Type: "Text",
          Body: "Hipp! ",
          Line: 5558
        }
      ],
      Line: 5557
    },
    {
      Name: "GRAF",
      Body: [
        {
          Type: "Text",
          Body: "Ole! ",
          Line: 5562
        }
      ],
      Line: 5561
    },
    {
      Name: "Regie",
      Body: [
        {
          Type: "Text",
          Body: "Es klopft. Bazillus verschwindet auf einen Wink des Grafen in der Truhe. ",
          Line: 5566
        }
      ],
      Line: 5565
    },
    {
      Name: "",
      Body: [
        {
          Type: "Seite",
          Body: "67",
          Line: 5570
        }
      ],
      Line: 5570
    },
    {
      Name: "SUSANNE",
      Body: [
        {
          Type: "Regie",
          Body: "auf",
          Line: 5574
        }
      ],
      Line: 5573
    },
    {
      Name: "",
      Body: [],
      Line: 5575
    },
    {
      Name: "GRAF",
      Body: [
        {
          Type: "Text",
          Body: "Ah, Susanne. Komm näher. Wie gefallen dir die vielen Blumen und Kränze? ",
          Line: 5578
        }
      ],
      Line: 5577
    },
    {
      Name: "SUSANNE",
      Body: [
        {
          Type: "Text",
          Body: "Sie erinnern mich an ein Begräbnis, Herr Graf. ",
          Line: 5583
        }
      ],
      Line: 5582
    },
    {
      Name: "",
      Body: [
        {
          Type: "TextTeilEnde",
          Body: "TextTeilAnfang",
          Line: 5586
        },
        {
          Type: "TextTeilAnfang",
          Body: "begin",
          Line: 5587
        }
      ],
      Line: 5586
    },
    {
      Name: "GRAF",
      Body: [
        {
          Type: "Text",
          Body: "Heute ist Hochzeit. Mein Diener Figaro heiratet Marcelline. Ich wünsche lustige Gesichter. ",
          Line: 5591
        }
      ],
      Line: 5590
    },
    {
      Name: "SUSANNE",
      Body: [
        {
          Type: "Text",
          Body: "Wenn Ihr mir den Bräutigam nehmt, gebt Ihr mir wenig Grund zu lachen. Geben Sie ihn frei, Herr Graf. Er ist mein Mann. Es ist meine Hochzeit. ",
          Line: 5596
        }
      ],
      Line: 5595
    },
    {
      Name: "GRAF",
      Body: [
        {
          Type: "Text",
          Body: "Das ist eine Heftigkeit, die ich nicht vertrage. ",
          Line: 5602
        }
      ],
      Line: 5601
    },
    {
      Name: "SUSANNE",
      Body: [
        {
          Type: "Text",
          Body: "Ich liebe ihn. Er kann Sonne und Mond vertauschen. ",
          Line: 5606
        }
      ],
      Line: 5605
    },
    {
      Name: "GRAF",
      Body: [
        {
          Type: "Text",
          Body: "Sprich weiter, Susanne, ich höre dir gerne zu. ",
          Line: 5610
        }
      ],
      Line: 5609
    },
    {
      Name: "SUSANNE",
      Body: [
        {
          Type: "Text",
          Body: "Was hören Sie, wenn ich von der Liebe rede? ",
          Line: 5614
        }
      ],
      Line: 5613
    },
    {
      Name: "GRAF",
      Body: [
        {
          Type: "Text",
          Body: "Hipp! Hipp! Ole! Bleiben wir beim Thema. Bist du gewaschen, Susanne? ",
          Line: 5618
        }
      ],
      Line: 5617
    },
    {
      Name: "SUSANNE",
      Body: [
        {
          Type: "Text",
          Body: "Wie eine Treppe zu Ostern. Herr Graf brauchen sie nur zu besteigen. ",
          Line: 5623
        }
      ],
      Line: 5622
    },
    {
      Name: "GRAF",
      Body: [
        {
          Type: "Text",
          Body: "Vorwärts, Almaviva! ",
          Line: 5628
        }
      ],
      Line: 5627
    },
    {
      Name: "SUSANNE",
      Body: [
        {
          Type: "Text",
          Body: "Halt, Herr Graf. Geben Sie Figaro frei, und ich werde im Park auf Sie warten. ",
          Line: 5632
        }
      ],
      Line: 5631
    },
    {
      Name: "GRAF",
      Body: [
        {
          Type: "Regie",
          Body: "kommt näher",
          Line: 5637
        }
      ],
      Line: 5636
    },
    {
      Name: "",
      Body: [],
      Line: 5638
    },
    {
      Name: "SUSANNE",
      Body: [
        {
          Type: "Text",
          Body: "Wollen Sie eine lauschige Sommernacht gegen die Zugluft dieses Saales eintauschen? ",
          Line: 5641
        }
      ],
      Line: 5640
    },
    {
      Name: "GRAF",
      Body: [
        {
          Type: "Text",
          Body: "Ich will, daß die Komödie zu Ende ist, mein Kind. Bleib stehen! ",
          Line: 5646
        }
      ],
      Line: 5645
    },
    {
      Name: "SUSANNE",
      Body: [
        {
          Type: "Text",
          Body: "Und Sie ebenso. Oder ich schrei um Hilfe. ",
          Line: 5651
        }
      ],
      Line: 5650
    },
    {
      Name: "GRAF",
      Body: [
        {
          Type: "Text",
          Body: "Dann wird dein Figaro bald ebenso um Hilfe schreien. ",
          Line: 5655
        }
      ],
      Line: 5654
    },
    {
      Name: "SUSANNE",
      Body: [
        {
          Type: "Text",
          Body: "Figaro? Was hat er Ihnen getan? Was wollen Sie mit ihm tun? ",
          Line: 5659
        }
      ],
      Line: 5658
    },
    {
      Name: "GRAF",
      Body: [
        {
          Type: "Text",
          Body: "Nichts, wenn du tust, was ich will. ",
          Line: 5663
        }
      ],
      Line: 5662
    },
    {
      Name: "SUSANNE",
      Body: [
        {
          Type: "Text",
          Body: "Und wenn ich mich weigere? ",
          Line: 5667
        }
      ],
      Line: 5666
    },
    {
      Name: "GRAF",
      Body: [
        {
          Type: "Text",
          Body: "Was ich an Figaro so mag, ist sein Witz. Ich werde mir eine witzige Strafe für ihn ausdenken. ",
          Line: 5671
        }
      ],
      Line: 5670
    },
    {
      Name: "",
      Body: [
        {
          Type: "Seite",
          Body: "68",
          Line: 5677
        }
      ],
      Line: 5677
    },
    {
      Name: "SUSANNE",
      Body: [
        {
          Type: "Text",
          Body: "Diese Heirat mit Marcelline ist in der Tat ein Witz! ",
          Line: 5681
        }
      ],
      Line: 5680
    },
    {
      Name: "GRAF",
      Body: [
        {
          Type: "Text",
          Body: "Aber noch nicht witzig genug. Es fehlen noch dreißig zündende Peitschenhiebe am Rücken des Bräutigams. ",
          Line: 5685
        }
      ],
      Line: 5684
    },
    {
      Name: "SUSANNE",
      Body: [
        {
          Type: "Text",
          Body: "Euer Witz ist so gewaltig, Herr Graf, daß man vor Gewalt den Witz nicht sieht. ",
          Line: 5690
        }
      ],
      Line: 5689
    },
    {
      Name: "GRAF",
      Body: [
        {
          Type: "Text",
          Body: "Nun, was ist? ",
          Line: 5695
        }
      ],
      Line: 5694
    },
    {
      Name: "SUSANNE",
      Body: [
        {
          Type: "Text",
          Body: "Es ist kalt. Ich sehe Euch an und friere. ",
          Line: 5699
        }
      ],
      Line: 5698
    },
    {
      Name: "GRAF",
      Body: [
        {
          Type: "Text",
          Body: "Ja oder nein? Überleg dir die Antwort gut, wenn dir dein stinkender Diener lieb ist. ",
          Line: 5703
        }
      ],
      Line: 5702
    },
    {
      Name: "SUSANNE",
      Body: [
        {
          Type: "Text",
          Body: "Hier! Nehmen Sie! Das Fleisch ist gewaschen! Nehmen Sie! Meine Schenkel sind frisch! Saugen Sie den Schweiß aus meinen Brüsten! Saugen Sie! Zertreten Sie den Garten! O Figaro. ",
          Line: 5708
        }
      ],
      Line: 5707
    },
    {
      Name: "GRAF",
      Body: [
        {
          Type: "Text",
          Body: "Das gefällt mir nicht. Du mußt dich wehren! ",
          Line: 5715
        }
      ],
      Line: 5714
    },
    {
      Name: "SUSANNE",
      Body: [
        {
          Type: "Text",
          Body: "O Figaro. ",
          Line: 5719
        }
      ],
      Line: 5718
    },
    {
      Name: "GRAF",
      Body: [
        {
          Type: "Regie",
          Body: "Schlägt Susanne mit der Peitsche.",
          Line: 5723
        }
      ],
      Line: 5722
    },
    {
      Name: "",
      Body: [],
      Line: 5724
    },
    {
      Name: "SUSANNE",
      Body: [
        {
          Type: "Regie",
          Body: "starrt den Grafen an",
          Line: 5727
        }
      ],
      Line: 5726
    },
    {
      Name: "",
      Body: [
        {
          Type: "Text",
          Body: "Ich hasse Euch. Euer Blut ist eine jämmerliche Jauche. Ihr seid schon tot, auch wenn Ihr mich erschlagt. Der Staub fällt aus Euren Hosen. Ihr seid ein Geschlecht, das die Därme in den Händen trägt. ",
          Line: 5727
        }
      ],
      Line: 5727
    },
    {
      Name: "Regie",
      Body: [
        {
          Type: "Text",
          Body: "lacht",
          Line: 5730
        }
      ],
      Line: 5730
    },
    {
      Name: "",
      Body: [
        {
          Type: "Text",
          Body: "Schlagen Sie! Schlagen Sie! ",
          Line: 5731
        }
      ],
      Line: 5731
    },
    {
      Name: "",
      Body: [
        {
          Type: "LangsameEinstellung",
          Body: "Strobo",
          Line: 5734
        }
      ],
      Line: 5734
    },
    {
      Name: "SUSANNE",
      Body: [
        {
          Type: "Text",
          Body: "Dieser Schmerz macht mich lebendig! ",
          Line: 5737
        }
      ],
      Line: 5736
    },
    {
      Name: "GRAF",
      Body: [
        {
          Type: "Text",
          Body: "Der Witz! Der Witz! Der Witz! Wo ist dein Witz geblieben? ",
          Line: 5741
        }
      ],
      Line: 5740
    },
    {
      Name: "Regie",
      Body: [
        {
          Type: "Text",
          Body: "Der Graf schlägt wild auf Susanne ein. Figaro kommt. Er stürzt sich auf den Grafen und erwürgt ihn mit der Peitsche. ",
          Line: 5745
        }
      ],
      Line: 5744
    },
    {
      Name: "",
      Body: [
        {
          Type: "LangsameEinstellung",
          Body: "langsam heller",
          Line: 5749
        }
      ],
      Line: 5749
    },
    {
      Name: "FIGARO",
      Body: [
        {
          Type: "Text",
          Body: "Wir müssen weg. Er ist tot. ",
          Line: 5752
        }
      ],
      Line: 5751
    },
    {
      Name: "SUSANNE",
      Body: [
        {
          Type: "Text",
          Body: "Tot? ",
          Line: 5756
        }
      ],
      Line: 5755
    },
    {
      Name: "FIGARO",
      Body: [
        {
          Type: "Text",
          Body: "Schnell weg von hier. ",
          Line: 5760
        }
      ],
      Line: 5759
    },
    {
      Name: "SUSANNE",
      Body: [
        {
          Type: "Text",
          Body: "Tot? Wohin, Figaro? ",
          Line: 5764
        }
      ],
      Line: 5763
    },
    {
      Name: "FIGARO",
      Body: [
        {
          Type: "Text",
          Body: "Ich weiß nicht. Ich weiß es nicht. ",
          Line: 5768
        }
      ],
      Line: 5767
    },
    {
      Name: "Regie",
      Body: [
        {
          Type: "Text",
          Body: "Die beiden gehen ab. ",
          Line: 5772
        }
      ],
      Line: 5771
    },
    {
      Name: "",
      Body: [
        {
          Type: "Seite",
          Body: "69",
          Line: 5775
        }
      ],
      Line: 5775
    },
    {
      Name: "Regie",
      Body: [
        {
          Type: "Text",
          Body: "Die Gräfin auf. Die Gräfin trägt das Kleid Susannes. ",
          Line: 5778
        }
      ],
      Line: 5777
    },
    {
      Name: "GREFIN",
      Body: [
        {
          Type: "Text",
          Body: "Susannes Kleid paßt mir ausgezeichnet. Ich habe ihre Figur. Es wird Zeit, mich im Park zu verstecken. Und dann, Herr Graf, zeigen Sie Ihrer Magd den feurigen Liebhaber, den Sie Ihrer Frau so beständig vorenthalten. ",
          Line: 5782
        },
        {
          Type: "Regie",
          Body: "sieht den Grafen",
          Line: 5785
        }
      ],
      Line: 5781
    },
    {
      Name: "",
      Body: [
        {
          Type: "Text",
          Body: "Herr Graf? Almaviva! Pedrito! ",
          Line: 5786
        }
      ],
      Line: 5786
    },
    {
      Name: "Regie",
      Body: [
        {
          Type: "Text",
          Body: "kniet an der Leiche ihres Mannes nieder, legt ihren Kopf an seine Brust. Kurze Pause.",
          Line: 5787
        }
      ],
      Line: 5787
    },
    {
      Name: "",
      Body: [],
      Line: 5789
    },
    {
      Name: "GREFIN",
      Body: [
        {
          Type: "Text",
          Body: "Es sollte eine Komödie werden. Ich trage Susannes Kleid, und du kommst in den Garten. Du erzählst mir von der Liebe, und ich schweige. Pedrito, warum sagst du nichts? Ich bin es, Susanne. Mein Körper ist jung, er atmet. Komm näher, das Mädchen wartet auf dich. Ich möchte, daß Sie mich küssen, mein Herr. Sein Mund ist still. Ich habe einen toten Grafen zum Liebhaber. Einen toten Mann. Erinnerst du dich an deine Lieder unter meinem Fenster? Ich habe deinen Gesang mit meinen Armen gefangen. Du konntest so fröhlich sein, so ausgelassen. Erinnerst du dich, wie ich in dieses Schloß gekommen bin? Ein Mann hat mich zur Frau genommen. Deine Frau. Dein Haus. ",
          Line: 5792
        },
        {
          Type: "Regie",
          Body: "heftig",
          Line: 5804
        }
      ],
      Line: 5791
    },
    {
      Name: "",
      Body: [
        {
          Type: "Text",
          Body: "Jaja, dein Haus, dein Schloß! Deine Diener! Deine Pferde! Deine Mägde! Dein Geld! Du hast mich zur Gräfin gemacht. Deine Frau hat einen Arsch, Almaviva, auch wenn sie ihn mit Anstand zu verbergen trachtet. Ich sehne mich nach den Händen deiner Knechte. Frau Gräfin lassen bitten! Bin ich schon lächerlich? Sie sind sehr schön, Frau Gräfin. Ich habe einen Freund. Er ist aufgeregt, wenn er mich sieht. ",
          Line: 5805
        }
      ],
      Line: 5805
    },
    {
      Name: "Regie",
      Body: [
        {
          Type: "Text",
          Body: "Cherubin tritt aus einer der hinteren Türen auf. Er sieht die Gräfin von hinten. Die Gräfin verdeckt den Grafen. ",
          Line: 5816
        }
      ],
      Line: 5815
    },
    {
      Name: "CHERUBIN",
      Body: [
        {
          Type: "Text",
          Body: "Ah, Susanne. Die Göttin des Personals. Du ",
          Line: 5821
        }
      ],
      Line: 5820
    },
    {
      Name: "",
      Body: [
        {
          Type: "Seite",
          Body: "70",
          Line: 5824
        }
      ],
      Line: 5824
    },
    {
      Name: "CHERUBIN",
      Body: [
        {
          Type: "Text",
          Body: "Landbutter auf dem grauen Brot des Alltags. Ich verzehre mich nach dem frischen Geschmack deiner Lippen. Warum sagst du nichts? Seit Stunden halte ich mich bei Blanchette versteckt. In einer Abstellkammer. Ich will mein junges Leben nicht mit alten Besen verbringen. Mir sind alle Glieder eingeschlafen. Küß mich, Susanne, und du erweckst sie zu neuem Leben. ",
          Line: 5827
        }
      ],
      Line: 5826
    },
    {
      Name: "GREFIN",
      Body: [
        {
          Type: "Regie",
          Body: "lacht hysterisch auf",
          Line: 5837
        }
      ],
      Line: 5836
    },
    {
      Name: "",
      Body: [],
      Line: 5838
    },
    {
      Name: "CHERUBIN",
      Body: [
        {
          Type: "Text",
          Body: "Oh, Frau Gräfin! Vergebt mir, ich wußte nicht... ",
          Line: 5841
        }
      ],
      Line: 5840
    },
    {
      Name: "GREFIN",
      Body: [
        {
          Type: "Text",
          Body: "Weißt du, an wen du mich erinnerst, Cherubin? ",
          Line: 5845
        },
        {
          Type: "Regie",
          Body: "weist auf den Grafen",
          Line: 5846
        }
      ],
      Line: 5844
    },
    {
      Name: "",
      Body: [
        {
          Type: "Text",
          Body: "An Pedrito! ",
          Line: 5846
        }
      ],
      Line: 5846
    },
    {
      Name: "CHERUBIN",
      Body: [
        {
          Type: "Text",
          Body: "Schläft der Herr Graf? ",
          Line: 5850
        }
      ],
      Line: 5849
    },
    {
      Name: "GREFIN",
      Body: [
        {
          Type: "Text",
          Body: "Ja, Cherubin. Er schläft und schnarcht. Wie üblich. ",
          Line: 5854
        }
      ],
      Line: 5853
    },
    {
      Name: "CHERUBIN",
      Body: [
        {
          Type: "Regie",
          Body: "sieht den toten Grafen.",
          Line: 5859
        }
      ],
      Line: 5858
    },
    {
      Name: "",
      Body: [
        {
          Type: "Text",
          Body: "Heilige Madonna, der Graf ... ",
          Line: 5859
        }
      ],
      Line: 5859
    },
    {
      Name: "GREFIN",
      Body: [
        {
          Type: "Text",
          Body: "Ja, Cherubin? ",
          Line: 5863
        }
      ],
      Line: 5862
    },
    {
      Name: "CHERUBIN",
      Body: [
        {
          Type: "Text",
          Body: "... er ist tot! ",
          Line: 5867
        }
      ],
      Line: 5866
    },
    {
      Name: "GREFIN",
      Body: [
        {
          Type: "Text",
          Body: "So? Bist du sicher? Und ich dachte, er schläft. ",
          Line: 5871
        }
      ],
      Line: 5870
    },
    {
      Name: "CHERUBIN",
      Body: [
        {
          Type: "Text",
          Body: "Wer hat das getan, Frau Gräfin? ",
          Line: 5875
        }
      ],
      Line: 5874
    },
    {
      Name: "GREFIN",
      Body: [
        {
          Type: "Text",
          Body: "Gefalle ich dir, Cherubin? ",
          Line: 5879
        }
      ],
      Line: 5878
    },
    {
      Name: "CHERUBIN",
      Body: [
        {
          Type: "Text",
          Body: "Sie ... Sie sind eine bezaubernde Frau. Er ist tot, Frau Gräfin! ",
          Line: 5883
        }
      ],
      Line: 5882
    },
    {
      Name: "GREFIN",
      Body: [
        {
          Type: "Text",
          Body: "Warum küßt du mich nicht? Mein Mann hat nichts dagegen. ",
          Line: 5887
        }
      ],
      Line: 5886
    },
    {
      Name: "CHERUBIN",
      Body: [
        {
          Type: "Text",
          Body: "Es können jeden Augenblick Menschen kommen. Man wird uns entdecken. ",
          Line: 5891
        }
      ],
      Line: 5890
    },
    {
      Name: "GREFIN",
      Body: [
        {
          Type: "Text",
          Body: "Dann laß uns fortgehen. Weit weg. ",
          Line: 5895
        }
      ],
      Line: 5894
    },
    {
      Name: "CHERUBIN",
      Body: [
        {
          Type: "Text",
          Body: "Sie wollen das Schloß verlassen? ",
          Line: 5899
        }
      ],
      Line: 5898
    },
    {
      Name: "GREFIN",
      Body: [
        {
          Type: "Text",
          Body: "Hast du die Bauern vergessen? Die Ernte? Die Oliven? Was sagtest du, Cherubin? Die Burschen tanzen, bis die Mädchen umfallen. Ich möchte tanzen. ",
          Line: 5903
        }
      ],
      Line: 5902
    },
    {
      Name: "CHERUBIN",
      Body: [
        {
          Type: "Text",
          Body: "Tanzen? Wissen Sie, was es heißt, unter Bauern zu leben? Das Land ist karg. Jeder Rebstock, jeder Olivenbaum wird mit Schweiß begossen. Die Ernte gehört dem Grafen. Tanzen? Ja, sie tanzen, damit sie besinnungslos werden und ihr Unglück vergessen. ",
          Line: 5909
        }
      ],
      Line: 5908
    },
    {
      Name: "",
      Body: [
        {
          Type: "Seite",
          Body: "71",
          Line: 5916
        }
      ],
      Line: 5916
    },
    {
      Name: "GREFIN",
      Body: [
        {
          Type: "Text",
          Body: "Ich kann arbeiten, Cherubin! ",
          Line: 5919
        }
      ],
      Line: 5918
    },
    {
      Name: "CHERUBIN",
      Body: [
        {
          Type: "Text",
          Body: "Wozu? Damit Sie häßlich werden, wie die Weiber auf dem Lande? ",
          Line: 5923
        }
      ],
      Line: 5922
    },
    {
      Name: "GREFIN",
      Body: [
        {
          Type: "Text",
          Body: "Ich will leben, Cherubin! ",
          Line: 5927
        }
      ],
      Line: 5926
    },
    {
      Name: "CHERUBIN",
      Body: [
        {
          Type: "Text",
          Body: "Leben? Das hier ist das Leben, Frau Gräfin. Bilder an den Wänden, Damast am Körper, ein französisches Frühstück, eine englische Bildung ... Geld, Kleider, Diener ... Leben, Leben!!! ",
          Line: 5931
        }
      ],
      Line: 5930
    },
    {
      Name: "GREFIN",
      Body: [
        {
          Type: "Text",
          Body: "Ich höre meinen Mann, den Grafen. ",
          Line: 5938
        }
      ],
      Line: 5937
    },
    {
      Name: "CHERUBIN",
      Body: [
        {
          Type: "Text",
          Body: "Ihr Mann ist tot, Frau Gräfin. Sie sind Witwe. Und doch zu schön, um Witwe zu bleiben. ",
          Line: 5942
        }
      ],
      Line: 5941
    },
    {
      Name: "GREFIN",
      Body: [
        {
          Type: "Text",
          Body: "Gehen Sie! Gehen Sie! Gehen Sie! ",
          Line: 5947
        }
      ],
      Line: 5946
    },
    {
      Name: "CHERUBIN",
      Body: [
        {
          Type: "Regie",
          Body: "schnell ab",
          Line: 5951
        }
      ],
      Line: 5950
    },
    {
      Name: "",
      Body: [],
      Line: 5952
    },
    {
      Name: "GREFIN",
      Body: [
        {
          Type: "Text",
          Body: "Gehen Sie! Gehen Sie! Bleib bei mir, Cherubin. Bleib. Bleib. ",
          Line: 5955
        },
        {
          Type: "Regie",
          Body: "verändert",
          Line: 5956
        }
      ],
      Line: 5954
    },
    {
      Name: "",
      Body: [
        {
          Type: "Text",
          Body: "Wie sehe ich aus? Ich muß mich umziehen. Welches Kleid nehme ich für diesen Abend? ",
          Line: 5956
        }
      ],
      Line: 5956
    },
    {
      Name: "Regie",
      Body: [
        {
          Type: "Text",
          Body: "ab",
          Line: 5958
        }
      ],
      Line: 5958
    },
    {
      Name: "",
      Body: [],
      Line: 5959
    },
    {
      Name: "",
      Body: [
        {
          Type: "LangsameEinstellung",
          Body: "Couch2",
          Line: 5961
        }
      ],
      Line: 5961
    },
    {
      Name: "BAZILLUS",
      Body: [
        {
          Type: "Regie",
          Body: "steigt aus seiner Truhe. Er sieht den toten Grafen und lacht. Er raubt ihn aus.",
          Line: 5964
        }
      ],
      Line: 5963
    },
    {
      Name: "",
      Body: [
        {
          Type: "Text",
          Body: "Eine Intrige gefällig? Herr Graf brauchen nur zu befehlen. Herr Graf sind eine bedeutende Leiche. Seine Exzellenz, der besonders wohlgeborene Graf von Almaviva. Bald scheint dir der Mond durch den Bauch. ",
          Line: 5966
        }
      ],
      Line: 5966
    },
    {
      Name: "Regie",
      Body: [
        {
          Type: "Text",
          Body: "brüllt",
          Line: 5970
        }
      ],
      Line: 5970
    },
    {
      Name: "",
      Body: [
        {
          Type: "Text",
          Body: "Mord! Totschlag! Revolution! Revolution! ",
          Line: 5970
        }
      ],
      Line: 5970
    },
    {
      Name: "Regie",
      Body: [
        {
          Type: "Text",
          Body: "Bazillus ab.",
          Line: 5971
        }
      ],
      Line: 5971
    },
    {
      Name: "",
      Body: [],
      Line: 5972
    },
    {
      Name: "",
      Body: [
        {
          Type: "Einstellung",
          Body: "Dunkel",
          Line: 5974
        }
      ],
      Line: 5974
    },
    {
      Name: "Regie",
      Body: [
        {
          Type: "Text",
          Body: "Ende. Beifall",
          Line: 5975
        }
      ],
      Line: 5975
    },
    {
      Name: "",
      Body: [
        {
          Type: "Einstellung",
          Body: "Umbau",
          Line: 5976
        }
      ],
      Line: 5976
    },
    {
      Name: "Regie",
      Body: [
        {
          Type: "Text",
          Body: "Alle Schauspieler kommen auf die Bühne. ",
          Line: 5979
        }
      ],
      Line: 5978
    },
    {
      Name: "",
      Body: [
        {
          Type: "Einstellung",
          Body: "Voll Hell",
          Line: 5982
        }
      ],
      Line: 5982
    },
    {
      Name: "Regie",
      Body: [
        {
          Type: "Text",
          Body: "Beifall",
          Line: 5984
        }
      ],
      Line: 5984
    }
  ]
};

@Injectable()
export class ScriptProviderService {

  private scriptUrl = '/api/script';

  constructor(private http: Http) { }

  getScript(): Promise<Script> {
    //return Promise.resolve(MOCKSCRIPT)
    return this.http.get(this.scriptUrl)
      .toPromise()
      .then(response => response.json() as Script)
      .catch(this.handleError);

  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
