<template>
  <div class="about">
    <div>
      <b-card
        no-body
        bg-variant="dark"
        active-tab-class="dark"
        active-nav-item-class="dark"
        text-variant="white"
      >
        <b-tabs
          card
          bg-variant="dark"
          text-variant="white"
          active-tab-class="dark"
          active-nav-item-class="dark"
        >
          <b-tab title="How To Join">
            <b-card-group rows>
              <b-card
                bg-variant="dark"
                text-variant="white"
                title="Step 1 - Add The Server"
                img-src="images/add-a-server.png"
                img-alt="Image"
                img-bottom
              >
                <b-card-text>
                  <p>
                    - Start Mincraft in the Current Compatible Version: 1.16.5
                  </p>
                  <p>- Go to Multiplayer and click "Add Server"</p>
                  <p>- Enter the server address <em>cloud.greyl.dev</em></p>
                  <p>- Click "Done"</p>
                </b-card-text>
              </b-card>

              <b-card
                bg-variant="dark"
                text-variant="white"
                title="Step 2 - Join The Server"
                img-src="images/server-added.png"
                img-alt="Image"
                img-bottom
              >
                <b-card-text>
                  <p>- Verify that the server was added correctly</p>
                  <p>- Verify connection and version compatability</p>
                  <p>- Select the server you added and click "Join Server"</p>
                  <p>- Have Fun!</p>
                </b-card-text>
              </b-card>
            </b-card-group>
          </b-tab>
          <b-tab title="About" class="left">
            <b-card-group rows>
              <b-card bg-variant="dark" text-variant="white" title="The Author">
                <p>
                  Grey Larson is a student at BYU studying Computer Science. He
                  has been working for over a year and is still currently
                  working at
                  <a href="https://www.fiber.net/">Fibernet</a> carrying out
                  general Tech Support and System Administrator responsibilites.
                </p>
              </b-card>
              <b-card bg-variant="dark" text-variant="white" title="Projects">
                <p>Three examples of projects that Grey has created:</p>
                <li>
                  This cool website:
                  <a href="https://cloud.greyl.dev/">cloud.greyl.dev</a>
                </li>
                <li>
                  A custom hosted MC server and an integrated
                  <a href="https://cloud.greyl.dev/dynmap/">live dynamic map</a>
                </li>
                <li>
                  A Family Map Android App (currently a private repository on
                  GitHub)
                </li>
              </b-card>
              <b-card bg-variant="dark" text-variant="white" title="Experience">
                <p>
                  Grey has created projects with HTML5, SCSS, Java, and C++ with
                  his classwork and also just for self-learning purposes. Grey
                  is painfully familiar with WHM, cPanel, CentOS, WordPress,
                  Apache, dovecot, exim, and many other things that come with
                  webhosting through his current employment.
                </p>
              </b-card>
              <b-card bg-variant="dark" text-variant="white" title="Contact">
                <p>Looking to contact Grey?</p>
                <p>
                  You can find him on
                  <a href="https://github.com/GreyrLarson">GitHub</a>
                </p>
              </b-card>
            </b-card-group>
          </b-tab>
        </b-tabs>
      </b-card>
    </div>
  </div>
</template>

<style>
.about {
  position: relative;
  padding: 2em;
}

.left {
  text-align: left;
}

.active {
  background-color: rgba(255, 255, 255, 0.05) !important;
  border-color: rgba(255, 255, 255, 0.05) !important;
}
</style>
