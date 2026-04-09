export const metadata = {
  title: "Portfolio - Contact",
  description: "The contact page of my portfolio.",
};
const form_id = "xbdpelvk";
export default function Contact() {
  return (
    <div>
      <div>Contact</div>
      <form action={`https://formspree.io/f/${form_id}`} method="post">
        <label htmlFor="email">Your Email</label>
        <input name="email" id="email" type="email" />
        <input name="_subject" type="hidden" value="New submission from portfolio contact form!" />
        <input name="text" id="text" type="text" placeholder="Your message here..." />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
