export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[var(--cream)] text-[var(--text)]">
      {/* =========================
          HERO
      ========================== */}
      <section className="relative flex min-h-screen flex-col items-center justify-center px-6 py-16 text-center">
        {/* Selector d'idioma */}
        <div className="absolute right-6 top-6 z-20 text-base sm:text-sm tracking-[0.15em]">
          <a
            href="/redlua_wedding"
            className="font-semibold text-[var(--pink)]"
          >
            CAT
          </a>

          <span className="mx-2 opacity-40">|</span>

          <a
            href="/redlua_wedding/es"
            className="transition-opacity hover:opacity-60"
          >
            ES
          </a>
        </div>

        {/* Sakura decorativa */}
        <img
          src="/redlua_wedding/sakura/ChatGPT Image Sep 26, 2026, 06_44_53 PM-2.png"
          alt=""
          className="pointer-events-none absolute left-0 top-0 w-[85%] max-w-[520px] -translate-x-[12%] -translate-y-[8%] opacity-50"
        />

        <img
          src="/redlua_wedding/sakura/ChatGPT Image Sep 26, 2026, 06_44_55 PM-4.png"
          alt=""
          className="pointer-events-none absolute bottom-0 right-0 w-[55%] max-w-[380px] translate-x-[18%] translate-y-[12%] rotate-[330deg] opacity-50"
        />

        <div className="relative -translate-y-6 z-10 flex max-w-xl flex-col items-center">
          <p className="mb-6 text-xl uppercase tracking-[0.35em] text-[var(--pink)]">
            ENS CASEM!
          </p>

          <h1 className="font-[var(--font-allura)] text-7xl leading-none text-[var(--text)] sm:text-8xl">
            Esteve &amp; Laia
          </h1>

          <div className="my-4 h-px w-16 bg-[var(--pink)]" />

          <p className="text-2xl tracking-[0.12em]">
            24 · 04 · 2027
          </p>

          <p className="mt-3 text-2xl italic">
            El Castell del Papiol
          </p>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[var(--pink)]">
          <span className="text-xl">⌄</span>
        </div>
      </section>

      {/* =========================
          INTRODUCCIÓ + FOTO
      ========================== */}
      <section className="relative px-6 py-28">
        <div className="mx-auto grid max-w-5xl items-center gap-12 md:grid-cols-2">
          <div className="text-center md:text-left">
            <p className="font-[var(--font-allura)] text-5xl text-[var(--pink)]">
              Benvinguts!
            </p>

            <p className="mt-8 text-xl sm:text-lg leading-relaxed">
              Ha arribat el dia de celebrar un esdeveniment molt important
              per a nosaltres, i ens encantaria fer-ho amb tots vosaltres.
            </p>

            <p className="mt-5 text-xl sm:text-lg leading-relaxed">
              Com bé sabeu, som una parella una mica &quot;peculiar&quot;,
              així que el nostre casament, com no podia ser d&apos;una altra
              manera, no serà del tot tradicional.
            </p>

            <p className="mt-5 text-xl sm:text-lg leading-relaxed">
              Hem decidit fer una celebració curta i emotiva, on compartirem
              amb les persones que més estimem una estoneta per recordar
              moments i celebrar la nostra unió.
            </p>

            <p className="mt-5 text-xl sm:text-lg leading-relaxed">
              És per això que serà un esdeveniment d&apos;una tarda: amb una
              cerimònia, un berenar i una estona per estar tots junts.
              No us espereu un <i>bodorrio</i> convencional!
            </p>
          </div>

          {/* FOTO 1 */}
          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute -inset-3 rounded-[2rem] border border-[var(--pink)] opacity-30" />

            <img
              src="/redlua_wedding/fotos/PXL_20260104_162226580(1).jpg"
              alt="Esteve i Laia"
              className="relative aspect-[4/5] w-full rounded-[2rem] object-cover"
            />
          </div>
        </div>
      </section>

      {/* =========================
          EL GRAN DIA
      ========================== */}
      <section
        id="el-dia"
        className="relative bg-[var(--cream-dark)] px-6 py-28"
      >
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-base sm:text-sm uppercase tracking-[0.3em] text-[var(--pink)]">
            El gran dia
          </p>

          <h2 className="mt-4 font-[var(--font-allura)] text-6xl">
            24 d&apos;Abril de 2027
          </h2>

          <div className="mx-auto mt-6 h-px w-16 bg-[var(--pink)]" />

          <p className="mt-8 text-xl">
            El Castell del Papiol
          </p>

          {/* Timeline */}
          <div className="mx-auto mt-16 max-w-5xl px-4">

            {/* MOBILE */}
            <div className="flex flex-col items-center sm:hidden">

              {/* Recepció */}
              <div className="text-center">
                <p className="text-2xl tracking-[0.12em] opacity-70">
                  16.30
                </p>

                <p className="mt-2 font-[var(--font-allura)] text-4xl text-[var(--pink)]">
                  Recepció
                </p>
              </div>

              <div className="my-7 h-10 w-px border-l border-dashed border-[var(--pink)] opacity-50" />

              {/* Cerimònia */}
              <div className="text-center">
                <p className="font-[var(--font-allura)] text-4xl text-[var(--pink)]">
                  Cerimònia*
                </p>
              </div>

              <div className="my-7 h-10 w-px border-l border-dashed border-[var(--pink)] opacity-50" />

              {/* Berenar */}
              <div className="text-center">
                <p className="font-[var(--font-allura)] text-4xl text-[var(--pink)]">
                  Berenar
                </p>
              </div>

              <div className="my-7 h-10 w-px border-l border-dashed border-[var(--pink)] opacity-50" />

              {/* Final */}
              <div className="text-center">
                <p className="text-2xl tracking-[0.12em] opacity-70">
                  21.00
                </p>

                <p className="mt-2 font-[var(--font-allura)] text-4xl text-[var(--pink)]">
                  Final
                </p>
              </div>
            </div>


            {/* DESKTOP */}
            <div className="relative hidden sm:block">

              {/* Línia central */}
              <div className="absolute left-[10%] right-[10%] top-[4.5rem] border-t border-dashed border-[var(--pink)] opacity-40" />

              <div className="relative grid grid-cols-4">

                {/* Recepció */}
                <div className="flex flex-col items-center text-center">
                  <div className="flex h-7 items-center justify-center">
                    <p className="text-2xl tracking-[0.12em] opacity-70">
                      16.30
                    </p>
                  </div>

                  <div className="relative z-10 my-6 flex h-5 w-5 items-center justify-center bg-[var(--cream-dark)]">
                    <span className="text-xs text-[var(--pink)]">✦</span>
                  </div>

                  <p className="font-[var(--font-allura)] text-4xl text-[var(--pink)]">
                    Recepció
                  </p>
                </div>

                {/* Cerimònia */}
                <div className="flex flex-col items-center text-center">
                  <div className="flex h-7 items-center justify-center">
                    {/* Espai reservat per a l’hora */}
                  </div>

                  <div className="relative z-10 my-6 flex h-5 w-5 items-center justify-center bg-[var(--cream-dark)]">
                    <span className="text-xs text-[var(--pink)]">✦</span>
                  </div>

                  <p className="font-[var(--font-allura)] text-4xl text-[var(--pink)]">
                    Cerimònia*
                  </p>
                </div>

                {/* Berenar */}
                <div className="flex flex-col items-center text-center">
                  <div className="flex h-7 items-center justify-center">
                    {/* Espai reservat per a l’hora */}
                  </div>

                  <div className="relative z-10 my-6 flex h-5 w-5 items-center justify-center bg-[var(--cream-dark)]">
                    <span className="text-xs text-[var(--pink)]">✦</span>
                  </div>

                  <p className="font-[var(--font-allura)] text-4xl text-[var(--pink)]">
                    Berenar
                  </p>
                </div>

                {/* Final */}
                <div className="flex flex-col items-center text-center">
                  <div className="flex h-7 items-center justify-center">
                    <p className="text-2xl tracking-[0.12em] opacity-70">
                      21.00
                    </p>
                  </div>

                  <div className="relative z-10 my-6 flex h-5 w-5 items-center justify-center bg-[var(--cream-dark)]">
                    <span className="text-xs text-[var(--pink)]">✦</span>
                  </div>

                  <p className="font-[var(--font-allura)] text-4xl text-[var(--pink)]">
                    Final
                  </p>
                  </div>
                </div>
              </div>

              <p className="mt-5 text-xl sm:text-lg leading-relaxed">
                <span className="text-[var(--pink)]">*</span>
                  Si voleu fer un petit discurs aquest es el vostre moment. Feu-nos-ho saber amb antelació!
              </p>
            </div>
          </div>

        {/* Fotos */}
        <div className="mx-auto mt-16 grid max-w-5xl gap-8 md:grid-cols-2">
          <div className="rotate-[-1deg]">
            <img
              src="/redlua_wedding/fotos/PXL_20251212_143551336(1).jpg"
              alt="Esteve i Laia"
              className="aspect-[4/3] w-full rounded-[1.5rem] object-cover shadow-sm"
            />
          </div>

          <div className="rotate-[1deg] md:mt-12">
            <img
              src="/redlua_wedding/fotos/PXL_20250430_020528060.MP(1).jpg"
              alt="Esteve i Laia"
              className="aspect-square w-full rounded-[1.5rem] object-cover object-[center_70%] shadow-sm"
            />
          </div>
        </div>
      </section>

      {/* =========================
          CONFIRMACIÓ
      ========================== */}
      <section
        id="confirmar"
        className="relative px-6 py-32 text-center"
      >
        <div className="mx-auto max-w-2xl">
          <p className="font-[var(--font-allura)] text-6xl text-[var(--pink)]">
            Vens?
          </p>

          <p className="mt-6 text-xl sm:text-lg leading-relaxed">
            Us demanem que confirmeu l&apos;assistència abans del 27 de gener de 2027. Ho podeu fer via WhatsApp/Telegram a qualsevol de nosaltres dos.
            Indiqueu-nos si veniu <strong>acompanyats</strong> i si teniu alguna <strong>restricció alimentària</strong>.
          </p>

          <p className="mt-6 text-xl sm:text-lg leading-relaxed">
            Ens faria molta il·lusió comptar amb tu en aquest dia tan
            especial. 😊
          </p>
        </div>
      </section>

      {/* =========================
          INFORMACIÓ PRÀCTICA
      ========================== */}
      <section className="bg-[var(--cream-dark)] px-6 py-28">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-base sm:text-sm uppercase tracking-[0.3em] text-[var(--pink)]">
            Informació pràctica
          </p>

          <h2 className="mt-4 font-[var(--font-allura)] text-6xl">
            Tot el que necessiteu saber
          </h2>

          <div className="mt-14 grid gap-10 text-left sm:grid-cols-2">

            {/* DRESS CODE */}
            <div>
              <h3 className="text-2xl sm:text-xl">
                👗 Dress code
              </h3>

              <p className="mt-3 text-xl leading-relaxed opacity-80 sm:text-base">
                El <i>dress code</i> que hem escollit és <i>smart casual</i>.
                La nostra idea és una vestimenta
                una mica arreglada però informal i còmoda. Com la que us podríeu
                posar per anar a una oficina on voleu causar bona impressió.
              </p>

              <p className="mt-3 text-xl leading-relaxed opacity-80 sm:text-base">
                Per a ells: polo o camisa, amb uns pantalons llargs, ja
                siguin texans o de vestir. Si algú vol portar alguna
                samarreta o pantalons curts, també serà benvingut
                (sobretot si la samarreta és de Pokémon).
              </p>

              <p className="mt-3 text-xl leading-relaxed opacity-80 sm:text-base">
                Per a elles: bruses, monos, vestits midi... amb tot el que
                us faci sentir còmodes. (Insistim: una samarreta de Pokémon
                ens semblarà molt bona idea també.)
              </p>

              <p className="mt-3 text-xl leading-relaxed opacity-80 sm:text-base">
                Pel que fa al calçat, que sigui CÒMODE. El Castell del Papiol
                té molt temps i caminar per allà podria resultar una prova
                del <i>Grand Prix</i>. Bambes, sabates... tot és benvingut.
              </p>
            </div>

            {/* ALLOTJAMENT */}
            <div>
              <h3 className="text-2xl sm:text-xl">
                🏨 Allotjament
              </h3>

              <p className="mt-3 text-xl leading-relaxed opacity-80 sm:text-base">
                Pel que fa a l&apos;allotjament, si és necessari ens posarem
                en contacte amb vosaltres, o ens podeu preguntar vosaltres
                mateixos per trobar la millor opció.
              </p>
              <br />
              {/* REGAL */}
              <h3 className="text-2xl sm:text-xl">
                🎁 Regal
              </h3>

              <p className="mt-3 text-xl leading-relaxed opacity-80 sm:text-base">
                En ser una celebració tan curta, no volem que us sentiu
                obligats a fer cap regal.
              </p>

              <p className="mt-3 text-xl leading-relaxed opacity-80 sm:text-base">
                El regal més gran per a nosaltres és que vingueu a compartir
                aquesta estona amb nosaltres.
              </p>

              <p className="mt-3 text-xl leading-relaxed opacity-80 sm:text-base">
                Si tot i així voleu fer un regal, agrairíem que fos en
                efectiu aquell dia o els dies previs.
              </p>
            </div>

            {/* COM ARRIBAR */}
            <div>
              <h3 className="text-2xl sm:text-xl">
                📍 Com arribar
              </h3>

              <p className="mt-3 text-xl leading-relaxed opacity-80 sm:text-base">
                 🏰 Aquesta és la ubicació del Castell del Papiol: <a href="https://maps.app.goo.gl/Ndqxbb6SksCudRDJ8" className="text-[var(--pink)] hover:underline">Enllaç</a>
              </p>

              <p className="mt-3 text-xl leading-relaxed opacity-80 sm:text-base">
                🚗 En cotxe: A la secció següent trobareu on podeu aparcar fàcilment.
              </p>

              <p className="mt-3 text-xl leading-relaxed opacity-80 sm:text-base">
                🚍 En autobús: <br />
                Aquí teniu la informació de la línia L67: <a href="https://horaris.gruptg.com/tgo/?linia=L67" className="text-[var(--pink)] hover:underline">Enllaç</a> <br />
                Per horaris, podeu agafar a Francesc Macià el que surt a les 16.00.<br />
                La tornada haurà de ser en tren o en algun altre mitjà de transport.
              </p>

              <p className="mt-3 text-xl leading-relaxed opacity-80 sm:text-base">
                🚇 En tren: <br />
                La línia que passa pel Papiol és la R4: <a href="https://rodalies.gencat.cat/web/.content/02_Horaris/horaris/R4.pdf" className="text-[var(--pink)] hover:underline">Horaris PDF</a>. <br />
                Després, podeu caminar (però avisem que fareu gana i nosaltres hem pensat només en un berenar) o agafar la línia del bus del Papiol que us puja fins al castell. Hi ha dues opcions:<br />
                  - PA1: <a href="https://www.elpapiol.cat/themes/mobilitat/horariPA1.pdf" className="text-[var(--pink)] hover:underline">Horaris</a> <br />
                  - PA2: <a href="https://www.elpapiol.cat/themes/mobilitat/horariPA2.pdf" className="text-[var(--pink)] hover:underline">Horaris</a> <br />

              </p>
            </div>

            {/* APARCAMENT */}
            <div>
              <h3 className="text-2xl sm:text-xl">
                🚗 Aparcament
              </h3>

              <p className="mt-3 text-xl leading-relaxed opacity-80 sm:text-base">
                Al Papiol no és difícil aparcar. Trobareu aquests punts per
                aparcar fàcilment, però podeu aparcar a tot el poble:
              </p>

              <p className="mt-3 text-xl leading-relaxed opacity-80 sm:text-base">
                - <a href="https://maps.app.goo.gl/5p2Xke78NB9rBeZW8?g_st=atm" className="text-[var(--pink)] hover:underline">Aparcament a Anselm Clavé</a>
              </p>

              <p className="mt-3 text-xl leading-relaxed opacity-80 sm:text-base">
                - <a href="https://maps.app.goo.gl/W7Y7iL6vrnRM1efd6?g_st=atm" className="text-[var(--pink)] hover:underline">Aparcament a la biblioteca</a>
              </p>

              <p className="mt-3 text-xl leading-relaxed opacity-80 sm:text-base">
                - <a href="https://maps.app.goo.gl/beXBjkkPo3iVNokv5?g_st=atm" className="text-[var(--pink)] hover:underline">Aparcament a l&apos;avinguda de la Generalitat</a>
              </p>

              <p className="mt-3 text-xl leading-relaxed opacity-80 sm:text-base">
                Després, és un passeig fins al castell. El calçat còmode
                també us anirà bé per a aquest moment. 😛 <br />
                Calculeu uns 10-15 min caminant fins al castell.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================
          FINAL
      ========================== */}
      <footer className="relative overflow-hidden px-6 py-28 text-center">
        <img
          src="/redlua_wedding/sakura/ChatGPT Image Sep 26, 2026, 06_44_52 PM-1.png"
          alt=""
          className="pointer-events-none absolute bottom-0 left-1/5 w-[300px] max-w-none -translate-x-1/2 translate-y-[30%] opacity-30 rotate-[35deg]"
        />

        <div className="relative z-10 flex flex-col items-center">
          <p className="font-[var(--font-allura)] text-6xl text-[var(--pink)]">
            Ens veiem el 24 d&apos;abril!
          </p>

          <p className="mt-6 text-xl sm:text-lg">
            Amb molta il·lusió,
          </p>

          <p className="mt-2 font-[var(--font-allura)] text-4xl">
            Esteve &amp; Laia
          </p>

          <img
            src="/logo_el_negre.png"
            alt=""
            className="mx-auto mt-5 w-10"
          />
        </div>
      </footer>
    </main>
  );
}
