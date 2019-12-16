import React from "react";
import Banner from "../img/Banner.jpg";

export function HomePage() {
  return (
    <main className="clearFix">
      <figure className="banner">
        <img src={Banner} />
      </figure>
      <h1>About me</h1>
      <hr className="fadeAway" />
      <div className="aboutme">
        <h2>Lorem Ipsum</h2>
        <blockquote>
          "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
          consectetur, adipisci velit..."
          <div>
            "There is no one who loves pain itself, who seeks after it and wants
            to have it, simply because it is pain..."
          </div>
        </blockquote>
        <article>
          <h3>Listum Striss</h3>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            rhoncus eleifend dolor, ac tincidunt lectus dignissim quis. Integer
            lacinia ex ut erat molestie rhoncus. Praesent lobortis efficitur
            odio sed semper. Suspendisse potenti. Suspendisse eu dignissim
            ipsum, quis porttitor magna. Morbi et sem mattis, dignissim enim
            non, pulvinar dui. Duis maximus feugiat odio, id dapibus sapien
            volutpat vulputate.
          </div>
        </article>

        <article>
          <h3>Strauss Machalean</h3>
          <div>
            Curabitur eget faucibus sapien. Mauris commodo sollicitudin erat,
            sit amet tincidunt risus efficitur sed. Suspendisse facilisis
            aliquet tortor, at iaculis neque porttitor quis. Integer interdum
            vestibulum dui eu tempus. Nullam sagittis dui ac lacinia fermentum.
            Sed et tincidunt magna. Sed ipsum mi, condimentum eget diam at,
            finibus iaculis risus. Ut volutpat vehicula diam. Ut bibendum ligula
            quis ex viverra interdum. Integer posuere tellus eu tortor viverra,
            a congue purus fermentum. Donec tempor molestie mi, quis feugiat leo
            placerat quis. Duis in mi eros. Sed quis eros suscipit nunc
            tristique posuere bibendum vel enim. In lacinia sollicitudin
            elementum. Maecenas fringilla semper sodales.
            <figure>
              <img src={Banner} />
              <figcaption>Some Picture</figcaption>
            </figure>
          </div>
        </article>

        <article>
          <h3>Ribon Misan</h3>
          <div>
            Phasellus nisi sem, laoreet ac velit at, vestibulum vehicula lectus.
            Cras a dignissim sem. Donec condimentum in ipsum id luctus. Proin
            sapien erat, vestibulum sed lobortis ut, posuere eu nulla. Mauris
            venenatis ac mi eget euismod. Cras hendrerit tortor ipsum, nec
            consequat ipsum tempor sit amet. Morbi ac tortor sit amet nisi
            varius placerat. Maecenas placerat purus massa, in luctus libero
            convallis eu. Nullam luctus, ex non laoreet gravida, massa massa
            sagittis est, non congue urna nibh a sapien. Vivamus vel posuere
            lorem. Aliquam quis massa elit. In hac habitasse platea dictumst.
          </div>
        </article>

        <article>
          <h3>Labeena Schmiroff</h3>
          <div>
            Ut ex nunc, scelerisque sed purus eu, efficitur accumsan leo.
            Maecenas ut justo odio. Sed magna ex, vulputate non ullamcorper
            molestie, convallis ac erat. Donec aliquam cursus mi, in elementum
            erat fermentum ac. Vestibulum purus mi, tempor non lacus ut,
            consectetur eleifend mi. Vestibulum ante ipsum primis in faucibus
            orci luctus et ultrices posuere cubilia Curae; Donec laoreet
            molestie nibh eget sagittis. In at arcu aliquam, imperdiet nibh sit
            amet, vestibulum enim. Morbi vel tellus sed ligula scelerisque
            vehicula quis ut arcu. Pellentesque tincidunt feugiat quam, sit amet
            vehicula ipsum fermentum eget. Nullam quam leo, interdum quis leo
            sed, eleifend sollicitudin risus. Nunc ac ipsum sagittis, congue
            neque nec, bibendum augue. Nam vitae ullamcorper dui. Nunc
            vestibulum porttitor hendrerit. Ut eleifend purus at ligula sodales
            hendrerit non et lacus. Praesent tristique posuere fringilla.
          </div>
        </article>

        <article>
          <h3>Rudi Rudo</h3>
          <div>
            In tincidunt, est lacinia sagittis vehicula, lacus mauris
            scelerisque purus, eget interdum dui turpis ut tortor. Donec et
            lectus in purus egestas ullamcorper a in eros. Ut at risus ut tellus
            pretium maximus non ac nisl. Mauris ac lorem tempor, mattis quam at,
            efficitur nisi. Proin in leo id libero eleifend tincidunt ut vel
            tortor. Sed posuere lorem vitae mi hendrerit, ut mollis nisi
            sodales. Mauris efficitur erat id mollis feugiat. In hac habitasse
            platea dictumst. Mauris sem lorem, tincidunt sit amet enim id,
            pretium tempor leo. Cras sit amet velit odio. Proin vestibulum
            auctor gravida. Curabitur egestas nibh sed mi auctor, ut congue
            lectus placerat. Fusce congue nulla felis, a maximus nibh sagittis
            a.
          </div>
        </article>
      </div>
    </main>
  );
}
