const MissionStatement = () => {
  return (
    <>
      {/* Mission Quote section */}
      <section
        aria-labelledby="mission quote statement"
        className="bg-amber-100/50 xl:mx-auto"
      >
        <div className="relative isolate overflow-hidden ">
          <div className="px-6 py-12 sm:px-6 sm:py-24 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-4xl font-extrabold tracking-tight text-indigo-800 sm:text-6xl">
                Our Mission
              </h2>
              <p className="mx-auto mt-6 max-w-2xl text-lg font-medium leading-8 text-indigo-600">
                As an inclusive partnership, we have united around a common
                belief that our children deserve the best. With a shared
                ambition for our students, staff, and communities, our goal is
                to foster opportunities and experiences that enable everyone to
                reach their full potential.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MissionStatement;
