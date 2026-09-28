export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[var(--cream)] text-[var(--text)]">
      {/* =========================
          HERO
      ========================== */}
      <section className="relative flex min-h-screen flex-col items-center justify-center px-6 py-16 text-center">
        {/* Selector d'idioma */}
        <div className="absolute right-6 top-6 z-20 text-sm tracking-[0.15em]">
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
          <p className="mb-6 text-sm uppercase tracking-[0.35em] text-[var(--pink)]">
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
            El Castell de Papiol
          </p>

          <a
            href="#el-dia"
            className="mt-12 rounded-full border border-[var(--pink)] px-8 py-3 text-lg tracking-[0.08em] text-[var(--pink)] transition-colors duration-300 hover:bg-[var(--pink)] hover:text-white"
          >
            Descobreix el nostre dia
          </a>
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

            <p className="mt-8 text-lg leading-relaxed">
              Ha arribat el dia de celebrar un esdeveniment molt important
              per a nosaltres, i ens encantaria fer-ho amb tots vosaltres.
            </p>

            <p className="mt-5 text-lg leading-relaxed">
              Com bé sabeu, som una parella una mica &quot;peculiar&quot;,
              així que el nostre casament, com no podia ser d&apos;una altra
              manera, no serà tradicional.
            </p>

            <p className="mt-5 text-lg leading-relaxed">
              Hem decidit fer una celebració curta i emotiva, on compartirem
              amb les persones que més estimem una estoneta per recordar
              moments i celebrar la nostra unió.
            </p>

            <p className="mt-5 text-lg leading-relaxed">
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
          <p className="text-sm uppercase tracking-[0.3em] text-[var(--pink)]">
            El gran dia
          </p>

          <h2 className="mt-4 font-[var(--font-allura)] text-6xl">
            24 d&apos;abril de 2027
          </h2>

          <div className="mx-auto mt-6 h-px w-16 bg-[var(--pink)]" />

          <p className="mt-8 text-xl">
            El Castell de Papiol
          </p>

          <p className="mt-2 text-base opacity-70">
            El Papiol, Barcelona
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
                  Cerimònia
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
                    {/* Espai reservat per la hora */}
                  </div>

                  <div className="relative z-10 my-6 flex h-5 w-5 items-center justify-center bg-[var(--cream-dark)]">
                    <span className="text-xs text-[var(--pink)]">✦</span>
                  </div>

                  <p className="font-[var(--font-allura)] text-4xl text-[var(--pink)]">
                    Cerimònia
                  </p>
                </div>

                {/* Berenar */}
                <div className="flex flex-col items-center text-center">
                  <div className="flex h-7 items-center justify-center">
                    {/* Espai reservat per la hora */}
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

          <p className="mt-6 text-lg leading-relaxed">
            Ens faria molta il·lusió comptar amb tu en aquest dia tan
            especial.
          </p>

          <a
            href="#"
            className="mt-10 inline-block rounded-full border border-[var(--pink)] px-10 py-3 text-lg tracking-[0.08em] text-[var(--pink)] transition-colors duration-300 hover:bg-[var(--pink)] hover:text-white"
          >
            Confirmar assistència
          </a>
        </div>
      </section>

      {/* =========================
          INFORMACIÓ PRÀCTICA
      ========================== */}
      <section className="bg-[var(--cream-dark)] px-6 py-28">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-[var(--pink)]">
            Informació pràctica
          </p>

          <h2 className="mt-4 font-[var(--font-allura)] text-6xl">
            Tot el que necessiteu saber
          </h2>

          <div className="mt-14 grid gap-10 text-left sm:grid-cols-2">

            {/* DRESS CODE */}
            <div>
              <h3 className="text-xl">
                👗 Dress code
              </h3>

              <p className="mt-3 leading-relaxed opacity-80">
                El <i>Dress code</i> que hem assignat és <i>Smart casual</i>.
                La nostra idea és una vestimenta
                una mica arreglada però informal i còmoda. Com us podríeu
                posar per anar a una oficina on voleu causar bona impressió.
              </p>

              <p className="mt-3 leading-relaxed opacity-80">
                Per a ells: polo o camisa, amb uns pantalons llargs, ja
                siguin texans o de vestir. Si algú vol portar alguna
                samarreta o pantalons curts, també serà benvingut
                (sobretot si la samarreta és de Pokémon).
              </p>

              <p className="mt-3 leading-relaxed opacity-80">
                Per a elles: bruses, monos, vestits midi... amb tot el que
                us faci sentir còmodes. (Insistim: una samarreta de Pokémon
                ens semblarà molt bona idea també.)
              </p>

              <p className="mt-3 leading-relaxed opacity-80">
                Pel que fa al calçat, que sigui CÒMODE. El Castell de Papiol
                té molt temps i caminar per allà podria resultar una prova
                del <i>Gran Prix</i>. Bambes, sabates... tot és benvingut.
              </p>
            </div>

            {/* ALLOTJAMENT */}
            <div>
              <h3 className="text-xl">
                🏨 Allotjament
              </h3>

              <p className="mt-3 leading-relaxed opacity-80">
                Pel que fa a l&apos;allotjament, si és necessari ens posarem
                en contacte amb vosaltres, o ens podeu preguntar vosaltres
                mateixos per trobar la millor opció.
              </p>
            </div>

            {/* COM ARRIBAR */}
            <div>
              <h3 className="text-xl">
                📍 Com arribar
              </h3>

              <p className="mt-3 leading-relaxed opacity-80">
                En cotxe:
              </p>

              <p className="mt-3 leading-relaxed opacity-80">
                En autobús:
              </p>

              <p className="mt-3 leading-relaxed opacity-80">
                En tren:
              </p>
            </div>

            {/* APARCAMENT */}
            <div>
              <h3 className="text-xl">
                🚗 Aparcament
              </h3>

              <p className="mt-3 leading-relaxed opacity-80">
                A Papiol no és difícil aparcar. Trobareu aquests punts per
                aparcar fàcilment:
              </p>

              <p className="mt-3 leading-relaxed opacity-80">
                Parking 1:
              </p>

              <p className="mt-3 leading-relaxed opacity-80">
                Parking 2:
              </p>

              <p className="mt-3 leading-relaxed opacity-80">
                Després, és un passeig fins al castell. El calçat còmode
                també us anirà bé per a aquest moment. 😛
              </p>
            </div>

            {/* REGAL */}
            <div>
              <h3 className="text-xl">
                🎁 Regal
              </h3>

              <p className="mt-3 leading-relaxed opacity-80">
                En ser una celebració tan curta, no volem que us sentiu
                obligats a fer cap regal.
              </p>

              <p className="mt-3 leading-relaxed opacity-80">
                El regal més gran per a nosaltres és que vingueu a compartir
                aquesta estona amb nosaltres.
              </p>

              <p className="mt-3 leading-relaxed opacity-80">
                Si encara així voleu fer un regal, agrairíem que fos en
                efectiu aquell dia o els dies previs.
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

          <p className="mt-6 text-lg">
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