const ContactSection = () => {
    return (
        <section className="contact" id="contact">
            <h2 className="contactH">Contact Me</h2>
            <form>
                <input type="text" placeholder="Your Name" required></input>
                <input type="email" placeholder="Your Email" required></input>
                <textarea placeholder="Your Message" rows="5" required></textarea>
                <button type="submit" className="btn">Send Message</button>
            </form>
        </section>
    )
}

export default ContactSection;
