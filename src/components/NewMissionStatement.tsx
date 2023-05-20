import Separator from './Separator';

function NewMissionStatement() {
  return (
    <div className="relative">
      <div className="mx-auto max-w-7xl">
        <div className="absolute inset-0 grid" aria-hidden="true">
          <div className="bg-white"></div>
          <div className="bg-gray-100"></div>
        </div>
        <div className="mx-auto max-w-[52rem] 2xl:max-w-4xl">
          <div className="relative">
            <div className="px-6">
              <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-lg md:p-10">
                <h3 className="mb-6 text-center text-4xl font-black text-new-brand-blue md:mb-8 md:text-5xl">
                  Our Mission
                </h3>
                <Separator />
                <p className="mt-6 text-center text-lg text-gray-600">
                  As an inclusive partnership, we have united around a common
                  belief that our children deserve the best. With a shared
                  ambition for our students, staff, and communities, our goal is
                  to foster opportunities and experiences that enable everyone
                  to reach their full potential.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewMissionStatement;
