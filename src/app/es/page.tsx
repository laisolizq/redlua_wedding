export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[var(--cream)] text-[var(--text)]">
      {/* =========================
          HERO
      ========================== */}
      <section className="relative flex min-h-screen flex-col items-center justify-center px-6 py-16 text-center">
        {/* Selector de idioma */}
        <div className="absolute right-6 top-6 z-20 text-sm tracking-[0.15em]">
          <a
            href="/"
            className="transition-opacity hover:opacity-60"
          >
            CAT
          </a>

          <span className="mx-2 opacity-40">|</span>

          <a
            href="/es"
            className="font-semibold text-[var(--pink)]"
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
          className="pointer-events-none absolute bottom-0 right-0 w-[70%] max-w-[380px] translate-x-[18%] translate-y-[12%] rotate-[340deg] opacity-50"
        />

        <div className="relative z-10 flex max-w-xl flex-col items-center">
          <p className="mb-8 text-sm uppercase tracking-[0.35em] text-[var(--pink)]">
            ¡NOS CASAMOS!
          </p>

          <h1 className="font-[var(--font-allura)] text-7xl leading-none text-[var(--text)] sm:text-8xl">
            Esteve &amp; Laia
          </h1>

          <div className="my-8 h-px w-16 bg-[var(--pink)]" />

          <p className="text-2xl tracking-[0.12em]">
            24 · 04 · 2027
          </p>

          <p className="mt-3 text-xl italic">
            El Castell de Papiol
          </p>

          <a
            href="#el-dia"
            className="mt-12 rounded-full border border-[var(--pink)] px-8 py-3 text-lg tracking-[0.08em] text-[var(--pink)] transition-colors duration-300 hover:bg-[var(--pink)] hover:text-white"
          >
            Descubre nuestro día
          </a>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[var(--pink)]">
          <span className="text-xl">⌄</span>
        </div>
      </section>

      {/* =========================
          INTRODUCCIÓN + FOTO
      ========================== */}
      <section className="relative px-6 py-28">
        <div className="mx-auto grid max-w-5xl items-center gap-12 md:grid-cols-2">
          <div className="text-center md:text-left">
            <p className="font-[var(--font-allura)] text-5xl text-[var(--pink)]">
              ¡Bienvenidos!
            </p>

            <p className="mt-8 text-lg leading-relaxed">
              Ha llegado el día de celebrar un acontecimiento muy importante
              para nosotros, y nos encantaría hacerlo con todos vosotros.
            </p>

            <p className="mt-5 text-lg leading-relaxed">
              Como bien sabéis, somos una pareja un poco &quot;peculiar&quot;,
              así que nuestra boda, como no podía ser de otra manera, no será
              tradicional.
            </p>

            <p className="mt-5 text-lg leading-relaxed">
              Hemos decidido hacer una celebración corta y emotiva, donde
              compartiremos con las personas que más queremos un ratito para
              recordar momentos y celebrar nuestra unión.
            </p>

            <p className="mt-5 text-lg leading-relaxed">
              Por eso será un evento de una tarde: con una ceremonia, una
              merienda y un rato para estar todos juntos. ¡No os esperéis un
              <i>bodorrio</i> convencional!
            </p>
          </div>

          {/* FOTO 1 */}
          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute -inset-3 rounded-[2rem] border border-[var(--pink)] opacity-30" />

            <img
              src="/redlua_wedding/fotos/PXL_20260104_162226580(1).jpg"
              alt="Esteve y Laia"
              className="relative aspect-[4/5] w-full rounded-[2rem] object-cover"
            />
          </div>
        </div>
      </section>

      {/* =========================
          EL GRAN DÍA
      ========================== */}
      <section
        id="el-dia"
        className="relative bg-[var(--cream-dark)] px-6 py-28"
      >
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-[var(--pink)]">
            El gran día
          </p>

          <h2 className="mt-4 font-[var(--font-allura)] text-6xl">
            24 de abril de 2027
          </h2>

          <div className="mx-auto mt-6 h-px w-16 bg-[var(--pink)]" />

          <p className="mt-8 text-xl">
            El Castell de Papiol
          </p>

          <p className="mt-2 text-base opacity-70">
            El Papiol, Barcelona
          </p>

          {/* Timeline */}
          <div className="mx-auto mt-16 max-w-4xl px-4">
            <div className="relative">
              {/* Carretera */}
              <div className="absolute left-[12.5%] right-[12.5%] top-4 hidden h-px bg-[var(--pink)] opacity-40 sm:block" />

              <div className="grid grid-cols-2 gap-y-12 sm:grid-cols-4 sm:gap-0">
                {/* Recepción */}
                <div className="relative text-center">
                  <div className="mx-auto flex h-8 w-8 items-center justify-center rounded-full border border-[var(--pink)] bg-[var(--cream)]">
                    <div className="h-2.5 w-2.5 rounded-full bg-[var(--pink)]" />
                  </div>

                  <p className="mt-4 font-[var(--font-allura)] text-4xl text-[var(--pink)]">
                    Recepción
                  </p>

                  <p className="mt-1 text-lg">
                    16.30
                  </p>
                </div>

                {/* Ceremonia */}
                <div className="relative text-center">
                  <div className="mx-auto flex h-8 w-8 items-center justify-center rounded-full border border-[var(--pink)] bg-[var(--cream)]">
                    <div className="h-2.5 w-2.5 rounded-full bg-[var(--pink)]" />
                  </div>

                  <p className="mt-4 font-[var(--font-allura)] text-4xl text-[var(--pink)]">
                    Ceremonia
                  </p>
                </div>

                {/* Merienda */}
                <div className="relative text-center">
                  <div className="mx-auto flex h-8 w-8 items-center justify-center rounded-full border border-[var(--pink)] bg-[var(--cream)]">
                    <div className="h-2.5 w-2.5 rounded-full bg-[var(--pink)]" />
                  </div>

                  <p className="mt-4 font-[var(--font-allura)] text-4xl text-[var(--pink)]">
                    Merienda
                  </p>
                </div>

                {/* Final */}
                <div className="relative text-center">
                  <div className="mx-auto flex h-8 w-8 items-center justify-center rounded-full border border-[var(--pink)] bg-[var(--cream)]">
                    <div className="h-2.5 w-2.5 rounded-full bg-[var(--cream)]" />
                  </div>

                  <p className="mt-4 font-[var(--font-allura)] text-4xl text-[var(--pink)]">
                    Final
                  </p>

                  <p className="mt-1 text-lg">
                    21.00
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
              alt="Esteve y Laia"
              className="aspect-[4/3] w-full rounded-[1.5rem] object-cover shadow-sm"
            />
          </div>

          <div className="rotate-[1deg] md:mt-12">
            <img
              src="/redlua_wedding/fotos/PXL_20250430_020528060.MP(1).jpg"
              alt="Esteve y Laia"
              className="aspect-square w-full rounded-[1.5rem] object-cover object-[center_70%] shadow-sm"
            />
          </div>
        </div>
      </section>

      {/* =========================
          CONFIRMACIÓN
      ========================== */}
      <section
        id="confirmar"
        className="relative px-6 py-32 text-center"
      >
        <div className="mx-auto max-w-2xl">
          <p className="font-[var(--font-allura)] text-6xl text-[var(--pink)]">
            ¿Vienes?
          </p>

          <p className="mt-6 text-lg leading-relaxed">
            Nos haría mucha ilusión contar contigo en este día tan especial.
          </p>

          <a
            href="#"
            className="mt-10 inline-block rounded-full border border-[var(--pink)] px-10 py-3 text-lg tracking-[0.08em] text-[var(--pink)] transition-colors duration-300 hover:bg-[var(--pink)] hover:text-white"
          >
            Confirmar asistencia
          </a>
        </div>
      </section>

      {/* =========================
          INFORMACIÓN PRÁCTICA
      ========================== */}
      <section className="bg-[var(--cream-dark)] px-6 py-28">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-[var(--pink)]">
            Información práctica
          </p>

          <h2 className="mt-4 font-[var(--font-allura)] text-6xl">
            Todo lo que necesitáis saber
          </h2>

          <div className="mt-14 grid gap-10 text-left sm:grid-cols-2">

            {/* DRESS CODE */}
            <div>
              <h3 className="text-xl">
                👗 Dress code
              </h3>

              <p className="mt-3 leading-relaxed opacity-80">
                El <i>Dress code</i> que hemos asignado es <i>Smart casual</i>.
                Nuestra idea es una vestimenta un poco arreglada pero informal
                y cómoda. Como os podríais poner para ir a una oficina donde
                queréis causar buena impresión.
              </p>

              <p className="mt-3 leading-relaxed opacity-80">
                Para ellos: polo o camisa, con unos pantalones largos, ya
                sean vaqueros o de vestir. Si alguien quiere llevar alguna
                camiseta o pantalones cortos, también será bienvenido
                (sobre todo si la camiseta es de Pokémon).
              </p>

              <p className="mt-3 leading-relaxed opacity-80">
                Para ellas: blusas, monos, vestidos midi... con todo lo que
                os haga sentir cómodas. (Insistimos: una camiseta de Pokémon
                nos parecerá muy buena idea también.)
              </p>

              <p className="mt-3 leading-relaxed opacity-80">
                En cuanto al calzado, que sea CÓMODO. El Castell de Papiol
                tiene mucha historia y caminar por allí podría resultar una
                prueba del <i>Gran Prix</i>. Zapatillas, zapatos... todo es
                bienvenido.
              </p>
            </div>

            {/* ALOJAMIENTO */}
            <div>
              <h3 className="text-xl">
                🏨 Alojamiento
              </h3>

              <p className="mt-3 leading-relaxed opacity-80">
                En cuanto al alojamiento, si es necesario nos pondremos en
                contacto con vosotros, o nos podéis preguntar vosotros mismos
                para encontrar la mejor opción.
              </p>
            </div>

            {/* CÓMO LLEGAR */}
            <div>
              <h3 className="text-xl">
                📍 Cómo llegar
              </h3>

              <p className="mt-3 leading-relaxed opacity-80">
                En coche:
              </p>

              <p className="mt-3 leading-relaxed opacity-80">
                En autobús:
              </p>

              <p className="mt-3 leading-relaxed opacity-80">
                En tren:
              </p>
            </div>

            {/* APARCAMIENTO */}
            <div>
              <h3 className="text-xl">
                🚗 Aparcamiento
              </h3>

              <p className="mt-3 leading-relaxed opacity-80">
                En Papiol no es difícil aparcar. Encontraréis estos puntos
                para aparcar fácilmente:
              </p>

              <p className="mt-3 leading-relaxed opacity-80">
                Parking 1:
              </p>

              <p className="mt-3 leading-relaxed opacity-80">
                Parking 2:
              </p>

              <p className="mt-3 leading-relaxed opacity-80">
                Después, es un paseo hasta el castillo. El calzado cómodo
                también os irá bien para este momento. 😛
              </p>
            </div>

            {/* REGALO */}
            <div>
              <h3 className="text-xl">
                🎁 Regalo
              </h3>

              <p className="mt-3 leading-relaxed opacity-80">
                Al ser una celebración tan corta, no queremos que os sintáis
                obligados a hacer ningún regalo.
              </p>

              <p className="mt-3 leading-relaxed opacity-80">
                El regalo más grande para nosotros es que vengáis a compartir
                este rato con nosotros.
              </p>

              <p className="mt-3 leading-relaxed opacity-80">
                Si aun así queréis hacer un regalo, agradeceríamos que fuera
                en efectivo ese día o los días previos.
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
          className="pointer-events-none absolute bottom-0 left-1/5 w-[500px] max-w-none -translate-x-1/2 translate-y-[45%] opacity-30"
        />

        <div className="relative z-10 flex flex-col items-center">
          <p className="font-[var(--font-allura)] text-6xl text-[var(--pink)]">
            ¡Nos vemos el 24 de abril!
          </p>

          <p className="mt-6 text-lg">
            Con mucha ilusión,
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
