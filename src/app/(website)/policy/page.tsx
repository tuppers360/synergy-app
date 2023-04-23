import { getPolicies } from '@/lib/sanity/sanity.utils';
import { PortableText } from '@portabletext/react';

async function PolicyPage() {
  const policies = await getPolicies();
  console.log('🚀 ~ file: page.tsx:6 ~ PolicyPage ~ policies:', policies);
  return (
    <div className="mx-auto max-w-7xl px-6 pb-32 pt-24 sm:pt-32 lg:px-8 lg:pt-16">
      PolicyPage
      <div className="flex flex-col text-slate-500 lg:flex-row-reverse">
        <section className="sticky top-0 h-full w-full p-4 lg:w-1/3">
          Fixed Sidebar
        </section>
        <section className="w-full space-y-4 p-4 lg:w-2/3">
          {policies.map((policy) => {
            return (
              <div key={policy._id}>
                <h1>{policy.name}</h1>
                <div className="prose prose-lg prose-slate lg:prose-xl prose-h2:text-indigo-600 prose-p:text-indigo-600 prose-ul:text-indigo-600">
                  <PortableText value={policy.content} />
                </div>
              </div>
            );
          })}
        </section>
      </div>
    </div>
  );
}

export default PolicyPage;
