import React from "react";
import { Container, Row } from "react-bootstrap";
import Course from "../components/Course";
import Heading from "../components/Heading";
import "./School.css";

const School = () => {
  document.title = "Andi Qu | School";

  return (
    <>
      <section>
        <Container>
          <Heading size="lg">School</Heading>
          <p>
            Why yes, I do go to school! I'd call you a big nerd for coming to
            this website to read about my schoolwork, but who am I to judge?
          </p>
          <p>
            I'm a student at MIT right now, studying computation and cognition
            (course 6-9). You can read about what I do/have done in college
            here. Note that everything here is just my opinion though (for
            example, apparently most people find 14.01 fun and easy).
          </p>
        </Container>
      </section>
      <section>
        <Container>
          <Heading size="md">Courses</Heading>

          <Heading size="sm">ASEs</Heading>
          <Container fluid>
            <Row>
              <Course
                title="6.0001"
                subtitle="Introduction to Computer Science Programming in Python"
                color="#4390de"
              >
                <p>
                  This is MIT's intro CS class. I tested out of it before my
                  freshman fall.
                </p>
                <p>
                  They actually initially messed up the grading of this exam
                  because they graded everything in Python 2 while we were told
                  to use Python 3. Somehow, it didn't seem odd to them that most
                  people got C's and F's...
                </p>
              </Course>
              <Course title="18.01" subtitle="Calculus" color="#575db5">
                <p>
                  This is part 1 of MIT's maths general institute requirement. I
                  tested out of it before my freshman fall.
                </p>
                <p>
                  Also, it's kind of funny that the lowest-level maths class
                  that MIT offers is calculus.
                </p>
              </Course>
              <Course
                title="18.02"
                subtitle="Multivariable Calculus"
                color="#575db5"
              >
                <p>
                  This is part 2 of MIT's maths general institute requirement. I
                  tested out of it before my freshman spring.
                </p>
                <p>
                  Spoiler alert: the big twist at the end of this class is that
                  everything is Stokes' theorem 😱.
                </p>
              </Course>
            </Row>
          </Container>

          <Heading size="sm">Fall 2021</Heading>
          <Container fluid>
            <Row>
              <Course title="ES.801" subtitle="Physics I" color="#8157b4">
                <ul>
                  <li>
                    <strong>Instructor:</strong> Analia Barrantes
                  </li>
                  <li>
                    <strong>Rating:</strong> 7/7
                  </li>
                </ul>
                <p>
                  This is ESG's version of 8.01: part 1 of MIT's physics general
                  institute requirement.
                </p>
                <p>
                  I liked this class because Analia is very nice and encourages
                  in-class participation. It was a lot less painful than
                  mainstream 8.01 (though rotational kinematics is painful
                  regardless).
                </p>
                <p>
                  But yeah, this was a generic classical mechanics class.
                  There's not much else to say about it.
                </p>
                <p>Oh, and did I mention that there was no final?</p>
              </Course>
              <Course
                title="ES.5111"
                subtitle="Principles of Chemical Science"
                color="#42deaf"
              >
                <ul>
                  <li>
                    <strong>Instructor:</strong> Nick Boekelheide
                  </li>
                  <li>
                    <strong>Rating:</strong> 6/7
                  </li>
                </ul>
                <p>
                  This is ESG's version of 5.111/3.091: MIT's chemistry general
                  institute requirement.
                </p>
                <p>
                  I went into this class not liking chemistry because of high
                  school, but I came out as a prospective materials science
                  major. I really appreciated the breadth of content that we
                  covered - especially the transition metal chemistry that one
                  wouldn't really see in high schools.
                </p>
                <p>
                  The first few weeks were rough because it was quantum
                  mechanics, and learning about acids and bases is never fun,
                  but the class ended with a final project, which I did on
                  fireworks.
                </p>
              </Course>
              <Course
                title="ES.7012"
                subtitle="Introductory Biology"
                color="#5779b4"
              >
                <ul>
                  <li>
                    <strong>Instructor:</strong> Patti Christie
                  </li>
                  <li>
                    <strong>Rating:</strong> 6/7
                  </li>
                </ul>
                <p>
                  This was ESG's version of 7.01x: MIT's biology general
                  institute requirement.
                </p>
                <p>
                  I've never really been a biology person and probably never
                  will be, so while I enjoyed the class, I didn't <em>love</em>{" "}
                  it.
                </p>
                <p>
                  Patti is a real force of nature, and she made biology less
                  about memorization (though there was still quite a bit of
                  that) and more about thinking about the underlying mechanisms.
                </p>
              </Course>
              <Course
                title="14.01"
                subtitle="Principles of Microeconomics"
                color="#de8f43"
              >
                <ul>
                  <li>
                    <strong>Instructor:</strong> Jon Gruber
                  </li>
                  <li>
                    <strong>Rating:</strong> 5/7
                  </li>
                </ul>
                <p>
                  This is one of course 14's introductory classes, which
                  unfortunately also happens to be one of the weed-out classes.
                </p>
                <p>
                  I went into the class thinking that it would be really fun and
                  chill because that's how everyone else described it. 20
                  minutes into the first lecture though, and we're doing
                  multivariable calculus already.
                </p>
                <p>
                  Don't get me wrong - the content was interesting and I want to
                  minor in economics. It's just that the class is really
                  maths-heavy for a humanities class, which was jarring.
                </p>
                <p>
                  (I heard a rumour that the head of Stanford economics took
                  this class in his undergrad and got a B.)
                </p>
              </Course>
              <Course
                title="21M.426"
                subtitle="MIT Wind Ensemble"
                color="#57acb5"
              >
                <ul>
                  <li>
                    <strong>Instructor:</strong> Fred Harris and Ken Amis
                  </li>
                  <li>
                    <strong>Rating:</strong> 7/7
                  </li>
                </ul>
                <p>
                  MITWE is the best class at MIT ❤️. Whoever rated this class
                  6/7 instead of 7/7 on the course evaluations must've had their
                  finger slip.
                </p>
                <p>
                  Fred and Ken are just really nice people and were willing to
                  support me even outside of classes. Fred even got us snacks
                  for some rehearsals.
                </p>
              </Course>
            </Row>
          </Container>

          <Heading size="sm">IAP 2022</Heading>
          <Container fluid>
            <Row>
              <Course
                title="6.S089"
                subtitle="Introduction to Quantum Computing"
                color="#4390de"
              >
                <ul>
                  <li>
                    <strong>Instructor:</strong> Amir Karamlou
                  </li>
                  <li>
                    <strong>Rating:</strong> 6/7
                  </li>
                </ul>
                <p>
                  This was a 6-unit quantum computing class taught by a PhD
                  student over IAP. There was surprisingly little physics in
                  this class, so I wasn't completely overwhelmed.
                </p>
                <p>
                  Being a class involving quantum mechanics, the material was
                  hard to digest and explain, but I somewhat got the hang of it
                  by the end (although I still don't understand how Grover's
                  search algorithm is useful if it assumes you already know the
                  answer).
                </p>
                <p>
                  The class ended with a final project, which I did with my
                  friend Richard on quantum cellular automata. You can read our
                  write-up{" "}
                  <a href="https://medium.com/mit-6-s089-intro-to-quantum-computing/quantum-cellular-automata-implementing-an-elementary-cellular-automata-on-a-qc-736ea944042">
                    here
                  </a>
                  .
                </p>
              </Course>
            </Row>
          </Container>

          <Heading size="sm">Spring 2022</Heading>
          <Container fluid>
            <Row>
              <Course title="ES.802" subtitle="Physics II" color="#8157b4">
                <ul>
                  <li>
                    <strong>Instructor:</strong> Analia Barrantes
                  </li>
                  <li>
                    <strong>Rating:</strong> 7/7
                  </li>
                </ul>
                <p>
                  This is ESG's version of 8.02: part 2 of MIT's physics general
                  institute requirement.
                </p>
                <p>
                  This was an E&M class, which I found much more intuitive and
                  interesting than classical mechanics. Learning multivariable
                  calculus before taking this class was really useful, since all
                  of Maxwell's equations were basically variants of Stokes'
                  theorem.
                </p>
                <p>
                  My one gripe with this class was the unrealistic assumptions
                  we made in our calculations (infinite solenoids, ideal
                  conductors, etc.), but this is somewhat true for all physics
                  classes I suppose.
                </p>
              </Course>
              <Course title="18.06" subtitle="Linear Algebra" color="#575db5">
                <ul>
                  <li>
                    <strong>Instructor:</strong> Steven Johnson
                  </li>
                  <li>
                    <strong>Rating:</strong> 6/7
                  </li>
                </ul>
                <p>
                  I'm really glad that I took this class in my freshman spring
                  because of how ubiquitous it is. It's used everywhere in
                  machine learning, which is perfect for my career goals. Its
                  concepts are even useful in differential equations and other
                  classes like that!
                </p>
                <p>
                  I feel like some concepts like the SVD could've been explained
                  better, and Prof. Johnson often lectured too quickly, but
                  overall the class was understandable and enjoyable.
                </p>
                <p>
                  This is probably the last course 18 class that I'll take at
                  MIT, but I'm happy that it ended on this high note.
                </p>
              </Course>
              <Course
                title="6.009"
                subtitle="Fundamentals of Programming"
                color="#4390de"
              >
                <ul>
                  <li>
                    <strong>Instructor:</strong> Adam Hartz
                  </li>
                  <li>
                    <strong>Rating:</strong> 1/7
                  </li>
                </ul>
                <p>
                  You could tell that this class is a weed-out class for course
                  6, not from its difficulty, but from how poorly it's
                  organized. Grading was opaque, collaboration policies were
                  unclear and unhelpful for most, and the class was just a mess
                  in general.
                </p>
                <p>
                  I'm honestly quite surprised that its course evaluation rating
                  isn't lower than it already is.
                </p>
              </Course>
              <Course
                title="21L.019"
                subtitle="Introduction to European and Latin American Fiction"
                color="#57b5b2"
              >
                <ul>
                  <li>
                    <strong>Instructor:</strong> Joaquin Terrones
                  </li>
                  <li>
                    <strong>Rating:</strong> 7/7
                  </li>
                </ul>
                <p>
                  I didn't think a literature class could be fun, but this class
                  proved me wrong. I enjoyed most of the assigned readings
                  (especially 'Candide'), and it was interesting to see how
                  different media is in other countries.
                </p>
                <p>
                  My favourite part of this class was when I submitted a vegan
                  manifesto as a joke essay, and Joaquin loved it. I also wrote
                  a gen-Z translation of one of the chapters in the first book
                  that we read, which was also very fun.
                </p>
              </Course>
              <Course
                title="21M.426"
                subtitle="MIT Wind Ensemble"
                color="#57acb5"
              >
                <ul>
                  <li>
                    <strong>Instructor:</strong> Fred Harris and Ken Amis
                  </li>
                  <li>
                    <strong>Rating:</strong> 7/7
                  </li>
                </ul>
                <p>See fall 2021. Still the best class at MIT.</p>
              </Course>
              <Course
                title="ES.S20"
                subtitle="Kalman Filtering"
                color="#575db5"
              >
                <ul>
                  <li>
                    <strong>Instructor:</strong> Joe Griffin
                  </li>
                  <li>
                    <strong>Rating:</strong> 6/7
                  </li>
                </ul>
              </Course>
              <Course
                title="ES.100"
                subtitle="An Introduction to Maker Skills"
                color="#5957b5"
              >
                <ul>
                  <li>
                    <strong>Instructor:</strong> Dave Custer
                  </li>
                  <li>
                    <strong>Rating:</strong> 7/7
                  </li>
                </ul>
              </Course>
            </Row>
          </Container>
        </Container>
      </section>
      <section>
        <Container>
          <Heading size="md">Activities</Heading>
          <p>
            I don't feel like describing each thing, so here's a simple list of
            things I am/have been involved with. You can probably read their
            descriptions elsewhere online.
          </p>
          <ul>
            <li>UROP (with MIT CSAIL)</li>
            <li>Experimental Study Group (ESG)</li>
            <li>NEET Advanced Material Machines track</li>
            <li>Projectionist for LSC</li>
            <li>OrigaMIT</li>
            <li>Simmons Hall house government</li>
            <li>TechX/xFair</li>
            <li>3.091 grading</li>
            <li>Figure skating club</li>
            <li>MIT Quidditch</li>
            <li>Associate advising</li>
            <li>DPD FPOP mentor</li>
          </ul>
        </Container>
      </section>
    </>
  );
};

export default School;
