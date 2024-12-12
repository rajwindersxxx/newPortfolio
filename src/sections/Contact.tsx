import ContactForm from '../components/ContactForm';

export default function Contact() {
  return (
    <section id="contact" className="text-teal-400 border-y-[1px] border-secondaryColor p-4 h-screen flex justify-center items-center">
      <div className="container mx-auto flex flex-col gap-8 ">
        <h2 className="text-center text-teal-200  text-4xl ">
          Get in touch
        </h2>
        <p className="text-center mb-4">
          I'm currently looking for new opportunities. If you have any questions
          or would like to discuss a project, feel free to get in touch.
        </p>
        <ContactForm />
      </div>
    </section>
  );
}
