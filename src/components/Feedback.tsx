export default function Feedback() {
  return (
    <section className="feedback_section container lazy">
      <div>
        <div className="feed_back-title">
          <h2 className="feedback_title">Have any suggestions or feedback?</h2>
        </div>
        <form className="feedback_form grid">
          <div>
            <label htmlFor="name">Name:</label>
          </div>
          <div>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Enter your name"
              required
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
          </div>
          <div>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              required
            />
          </div>
          <div>
            <label htmlFor="message">Message:</label>
          </div>
          <div>
            <textarea
              name="message"
              id="message"
              placeholder="Enter your message"
              required
            ></textarea>
          </div>
          <button type="submit" className="button_primary">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
