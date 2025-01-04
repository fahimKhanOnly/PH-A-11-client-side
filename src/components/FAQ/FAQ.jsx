import faq from '../../assets/faq.svg';


const FAQ = () => {
  const faqs = [
    {
      question: "What is HistoriX?",
      answer: "HistoriX is a platform dedicated to showcasing historical artifacts from around the world, preserving their stories, and making them accessible to history enthusiasts."
    },
    {
      question: "How can I add an artifact to HistoriX?",
      answer: "You can add an artifact by navigating to the 'Add Artifacts' section on the website. Fill out the required details, including the artifact's name, description, and location, and upload an image."
    },
    {
      question: "How can I contact HistoriX for support or inquiries?",
      answer: "You can reach out to us through the 'Contact Us' section on the website or email us directly at support@historix.com."
    },
    {
      question: "Does HistoriX allow users to like or save artifacts?",
      answer: "Yes, users can like artifacts to show their appreciation. A future feature to save artifacts to personal collections is also in the works."
    },
    {
      question: "Is HistoriX free to use?",
      answer: "Yes, HistoriX is completely free to use for browsing, learning, and contributing artifacts."
    },
    {
      question: "How often is the website updated with new artifacts?",
      answer: "HistoriX is updated regularly as new artifacts are discovered or added by contributors. Check the 'Latest Discoveries' section for updates."
    }
  ];

  return (
    <div className="container mx-auto px-2 my-20">
      <h1 className="text-4xl font-bold text-center mb-11">FAQ</h1>
      <div className='flex justify-between gap-8 items-center'>
      <div className="xl:w-2/3 space-y-2">
        {
          faqs.map(faq => <div>
            <div tabIndex={0} className="collapse collapse-arrow border-base-300 bg-base-200 border">
              <div className="collapse-title text-xl font-bold">{faq.question}</div>
              <div className="collapse-content">
                <p className='font-medium'>{faq.answer}</p>
              </div>
            </div>
          </div>)
        }
      </div>
        <div>
          <img className='hidden xl:block' src={faq} />
        </div>
      </div>
    </div>
  );
};

export default FAQ;