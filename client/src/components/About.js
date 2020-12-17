import React from "react";
import './About.css';

const About = () => (
    <section className="about-section">
        <h3>About</h3>
        <blockquote>“The sound of colours is so definite that it would be hard to find anyone who would express bright yellow with base notes, or dark lake with the treble.” - Wassily Kandinsky, artist</blockquote>

        <blockquote>“Hearing is a form of touch. I hear it through the body, by opening myself up. Sometimes it almost hits you in the face.” Evelyn Glennie, percussionist</blockquote>
        <br/>
        <p>
            The idea for this project started with an enthusiastic conversation about synesthesia — where information meant for one of the senses may be experienced by others (from the Greek to ‘perceive together’).
            Most commonly, this means experiencing music, sounds or words as colours. Some synesthetes may taste shapes or names, or smell in response to touch. Many have been famous artists and musicians and some studies suggest synesthesia may be more common in those with autism.
        </p>
        <br/>
        <h4>The brief</h4>
        <p>
            Our rambling chat led us to our brief: to make a fun, playful musical instrument that produces a visual stimulus — shapes, colours, animation — in response to a user’s interaction.
        </p>
        <br/>
        <h4>Accessibility</h4>
        <p>
            We also discussed accessibility, with lofty ambitions to make our app as inclusive as possible.
            What if users could customise everything? What colour is the note D? What shape? What choices of colour contrast would be preferable for people with impaired sight, or people on the autistic spectrum? What about those who use a keyboard and not a mouse?
            As we wrote proto personas and user stories, we quickly accepted that accessibility done well takes time, effort and real expertise to meet such diverse needs. Given this was a six-day CodeClan project for rookie developers, focusing on functionality would have to take priority over more noble goals.
        </p>
        <br/>
        <h4>To be explored...</h4>
        <p>So that’s it. The story of our simple music visualiser: [App name]. We hope it’s as fun to explore as it was to work on (and hopefully less challenging!)
        Given more time and more experience, we’d like to imagine it could be much more about user choice and control — over sounds, colours, animations and touch — and one day become truly inclusive.
        </p>
        {/* <p>Cat, Dave, Iain, Maria: CodeClan cohort e43, December 2020</p> */}
    </section>
);

export default About;
