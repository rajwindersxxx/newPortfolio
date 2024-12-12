import { PrimaryButton } from './Buttons';

export default function ContactForm() {
  return (
    <form
      method="POST"
      action="https://formsubmit.co/el/sefela"
      encType="multipart/form-data"
      className="grid grid-cols-1 md:grid-cols-6 gap-2 md:gap-6 px-8 mx-auto lg:w-3/5 w-full border-[1px] border-secondaryColor p-8 rounded"
    >
      <label htmlFor="name" className="text-xl mt-2 md:m-0">
        Name:
      </label>
      <input
        className="md:col-span-5 rounded-sm p-2 text-teal-200 bg-backgroundColor/75 border border-teal-200 placeholder:text-teal-600 outline-none valid:border-green-700 invalid:border-teal-600"
        type="text"
        name="name"
        id="name"
        placeholder="e.g raj"
        required
      />
      <label htmlFor="email" className="text-xl mt-2 md:m-0">
        Email:
      </label>
      <input
        className="md:col-span-5 rounded-sm p-2 text-teal-200 bg-backgroundColor/75 border border-teal-200 placeholder:text-teal-600 outline-none valid:border-green-700 invalid:border-teal-600"
        type="email"
        name="email"
        id="email"
        placeholder="name@example.com"
        required
      />

      <label htmlFor="message" className="text-xl mt-2 md:m-0">
        Message:
      </label>

      <textarea
        className="md:col-span-5 rounded-sm p-2 text-teal-200 bg-backgroundColor/75 border border-teal-200 placeholder:text-teal-600 resize-none outline-none transition-all valid:border-green-700 invalid:border-teal-600"
        name="message"
        id="message"
        rows={8}
        placeholder="Your message "
        required
      ></textarea>

      <PrimaryButton className="md:col-start-6  justify-self-end w-36 text-xl">
        Submit
      </PrimaryButton>
    </form>
  );
}
