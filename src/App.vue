<template>
  <div id="app">
    <div class="nav-bar">
      <div class="nav-logo">
        vue-share-it
      </div>
    </div>
    <div class="new-header">
      <div class="header-container">
      <img src="./assets/share-it.png" width="50%" />
      <div class="header-text">
        <div class="full-width">
          <div class="heading text-1">vue-share-it</div>
          <hr class="head-divider">
          <div class="sub-heading text-2">A highly customizable Vue.js component for sharing links on social networks.</div>
          <div class="py-3 text-1">
            <img class="mr-3" src="https://img.shields.io/npm/v/vue-share-it" />
            <img class="mr-3" src="https://img.shields.io/badge/vue-2.x-brightgreen" />
            <img class="mr-3" src="https://img.shields.io/npm/l/vue-share-it" />
          </div>
        </div>
      </div>
      </div>
    </div>

    <div class="py-3">
      <share-it />
    </div>

    <v-layout row>
      <v-col :cols="4" :offset="4">
        <template>
          <v-treeview
            :items="content"
            item-key="value"
            item-text="label"
            hoverable
            selected-color="accent"
            color="primary"
            open-on-click
          >
            <template v-slot:label="{ item }">
              <div v-if="item.children && item.children.length">{{item.label}}</div>
              <a v-else :href="`#${item.value}`">{{item.label}}</a>
            </template>
          </v-treeview>
        </template>
      </v-col>
    </v-layout>

    <v-card color="#E0E0E0" width="80%" class="auto-margin">
      <section class="body py-3">
        <section class="example">
          <v-card
            class="mx-auto"
            color="#ededed"
          >
            <div class="sub-heading x-pad">
              <a name="features" class="content-link">Features</a>
            </div>
            <template>
              <v-list>
                <v-list-item>
                  <v-icon color="#333" class="mr-3">mdi-arrow-right-bold-hexagon-outline</v-icon>
                  Easy install
                </v-list-item>
                <v-list-item>
                  <v-icon color="#333" class="mr-3">mdi-arrow-right-bold-hexagon-outline</v-icon>
                  Highly customizable
                </v-list-item>
                <v-list-item>
                  <v-icon color="#333" class="mr-3">mdi-arrow-right-bold-hexagon-outline</v-icon>
                  Extensive documentation & examples
                </v-list-item>
                <v-list-item>
                  <v-icon color="#333" class="mr-3">mdi-arrow-right-bold-hexagon-outline</v-icon>
                  Developer support
                </v-list-item>
                <v-list-item>
                  <v-icon color="#333" class="mr-3">mdi-arrow-right-bold-hexagon-outline</v-icon>
                  SEO friendly
                </v-list-item>
              </v-list>
            </template>
          </v-card>
        </section>
        <section class="example">
          <v-card
            class="mx-auto"
            color="#ededed"
          >
            <div class="sub-heading x-pad">
              <a name="installation" class="content-link">Installation</a>
            </div>
            <template>
              <v-row justify="start">
                <v-col
                >
                  <v-sheet
                    color="grey lighten-3"
                    class="py-3"
                  >
                    <p>
                      <em class="d-block py-3"># Yarn</em>
                      <pre><code class="has-line-data language-javascript" data-line-start="1" data-line-end="3">yarn add vue-share-it
</code></pre>
                    </p>
                    <p>
                      <em class="d-block py-3"># NPM</em>
                      <pre><code class="has-line-data language-javascript" data-line-start="1" data-line-end="3">npm install vue-share-it --save
</code></pre>
                    </p>
                  </v-sheet>
                </v-col>
              </v-row>
            </template>
          </v-card>
        </section>
        <section class="example">
          <v-card
            class="mx-auto"
            color="#ededed"
          >
            <div class="sub-heading x-pad">
              <a name="usage" class="content-link">Usage</a>
            </div>
            <template>
              <v-row justify="start">
                <v-col
                >
                  <v-sheet
                    color="grey lighten-3"
                    class="py-3"
                  >
                    <p>
                      <em class="d-block py-3">Browserify/Webpack</em>
                      <pre><code class="has-line-data language-javascript" data-line-start="1" data-line-end="5"><span class="hljs-keyword">import</span> shareIt <span class="hljs-keyword">from</span> <span class="hljs-string">'vue-share-it'</span>;

Vue.use(shareIt);
</code></pre>
                    </p>
                    <p>
                      <em class="d-block py-3">HTML</em>
                      <pre><code class="has-line-data language-html" data-line-start="1" data-line-end="3"><span class="hljs-tag">&lt;<span class="hljs-title">script</span> <span class="hljs-attribute">src</span>=<span class="hljs-value">"https://unpkg.com/vue-share-it@x.x.x/dist/vue-share-it.js"</span>&gt;</span><span class="undefined"></span><span class="hljs-tag">&lt;/<span class="hljs-title">script</span>&gt;</span>
</code></pre>
                    </p>
                  </v-sheet>
                </v-col>
              </v-row>
            </template>
          </v-card>
        </section>
        <section class="example">
          <v-card
            class="mx-auto"
            color="#ededed"
          >
            <div class="sub-heading x-pad">
              <a name="supported-platforms" class="content-link">Supported platforms</a>
            </div>
            <template>
              <v-row justify="start">
                <v-col
                >
                  <v-sheet
                    color="grey lighten-3"
                    class="py-3"
                  >
                    <template>
                      <v-simple-table>
                        <template v-slot:default>
                          <thead>
                            <tr>
                              <th class="text-center"><strong>Platform</strong></th>
                              <th class="text-center"><strong>id</strong></th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr v-for="item in platformList" :key="item.name">
                              <td class="text-center">{{ item.name }}</td>
                              <td class="text-center">{{ item.id }}</td>
                            </tr>
                          </tbody>
                        </template>
                      </v-simple-table>
                    </template>
                  </v-sheet>
                </v-col>
              </v-row>
            </template>
          </v-card>
        </section>
        <section class="example">
          <v-card
            class="mx-auto"
            color="#ededed"
          >
            <div class="sub-heading x-pad">
              <a name="api" class="content-link">API</a>
            </div>
            <template>
              <v-row justify="start">
                <v-col
                >
                  <v-sheet
                    color="grey lighten-3"
                    class="py-3"
                  >
                    <div class="text-left ml-3 sub-title">
                      <a name="api-props" class="content-link sub-link">Props</a>
                    </div>
                    <v-divider />
                    <template>
                      <v-simple-table class="pb-3">
                        <template v-slot:default>
                          <thead>
                            <tr>
                              <th class="text-center"><strong>Prop</strong></th>
                              <th class="text-center"><strong>Data type</strong></th>
                              <th class="text-center"><strong>Default</strong></th>
                              <th class="text-center"><strong>Description</strong></th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr v-for="item in propsList" :key="item.name">
                              <td class="text-center">{{ item.name }}</td>
                              <td class="text-center">{{ item.type }}</td>
                              <td class="text-center" v-html="item.default"></td>
                              <td class="text-center" v-html="item.description"></td>
                            </tr>
                          </tbody>
                        </template>
                      </v-simple-table>
                    </template>
                    <v-divider></v-divider>
                    <div class="text-left ml-3 sub-title">
                      <a name="api-events" class="content-link sub-link">Events</a>
                    </div>
                    <v-divider />
                    <template>
                      <v-simple-table>
                        <template v-slot:default>
                          <thead>
                            <tr>
                              <th class="text-center"><strong>Name</strong></th>
                              <th class="text-center"><strong>Description</strong></th>
                              <th class="text-center"><strong>Value</strong></th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr v-for="item in eventsList" :key="item.name">
                              <td class="text-center">{{ item.name }}</td>
                              <td class="text-center">{{ item.description }}</td>
                              <td class="text-center">{{ item.value }}</td>
                            </tr>
                          </tbody>
                        </template>
                      </v-simple-table>
                    </template>
                    <v-divider></v-divider>
                    <div class="text-left ml-3 sub-title">
                      <a name="api-slots" class="content-link sub-link">Slots</a>
                    </div>
                    <v-divider />
                    <template>
                      <v-simple-table class="pb-3">
                        <template v-slot:default>
                          <thead>
                            <tr>
                              <th class="text-center"><strong>Name</strong></th>
                              <th class="text-center"><strong>Description</strong></th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr v-for="item in slotsList" :key="item.name">
                              <td class="text-center">{{ item.name }}</td>
                              <td class="text-center">{{ item.description }}</td>
                            </tr>
                          </tbody>
                        </template>
                      </v-simple-table>
                    </template>
                  </v-sheet>
                </v-col>
              </v-row>
            </template>
          </v-card>
        </section>
      </section>
    </v-card>

    <v-card color="#E0E0E0" width="80%" class="auto-margin">
    <section class="body">
      <div class="title">
        <a name="examples" class="content-link">Examples</a>
      </div>
      
      <section class="example">
        <v-card
          class="mx-auto"
          color="#ededed"
        >
        <div class="sub-heading x-pad">
          <a name="example-default" class="content-link">Default</a>
        </div>
        <template>
            <v-tabs vertical>
              <v-tab class="justify-content-left">
                <v-icon left :color="htmlIconColor">mdi-language-html5</v-icon>
                <strong>Template</strong>
              </v-tab>
              <v-tab-item>
                <v-card flat>
                  <v-card-text>
                    <code-highlight>
                      <pre><code class="language-html has-line-data" data-line-start="1" data-line-end="3"><span class="hljs-tag">&lt;<span class="hljs-title">shareit</span> /&gt;</span></code></pre>
                    </code-highlight>
                  </v-card-text>
                </v-card>
              </v-tab-item>
            </v-tabs>
        </template>
        <div class="x-pad">
          <share-it />
        </div>
        </v-card>
      </section>

      <section class="example">
        <v-card
          class="mx-auto"
          color="#ededed"
        >
        <div class="sub-heading x-pad">
          <a name="example-global-configs" class="content-link">Global configs</a>
        </div>
        <template>
            <v-tabs vertical >
              <v-tab class="justify-content-left">
                <v-icon left :color="htmlIconColor">mdi-language-html5</v-icon>
                <strong>Template</strong>
              </v-tab>
              <v-tab-item>
                <v-card flat>
                  <v-card-text>
                    <code-highlight>
                      <pre><code class="language-html has-line-data" data-line-start="1" data-line-end="3"><span class="hljs-tag">&lt;<span class="hljs-title">share-it</span> <span class="hljs-attribute">text</span>=<span class="hljs-value">"A highly customizable Vue.js component for sharing links on social networks."</span> <span class="hljs-attribute">url</span>=<span class="hljs-value">"https://github.com/thisDOTname/vue-share-it"</span> <span class="hljs-attribute">:height</span>=<span class="hljs-value">"600"</span> <span class="hljs-attribute">:width</span>=<span class="hljs-value">"600"</span> /&gt;</span> </code></pre>
                    </code-highlight>
                  </v-card-text>
                </v-card>
              </v-tab-item>
            </v-tabs>
        </template>
        <div class="x-pad">
          <share-it text="A highly customizable Vue.js component for sharing links on social networks." url="https://github.com/thisDOTname/vue-share-it" :height="600" :width="600" />
        </div>
        </v-card>
      </section>

      <section class="example">
        <v-card
          class="mx-auto"
          color="#ededed"
        >
        <div class="sub-heading x-pad">
          <a name="example-targets" class="content-link">Targets</a>
        </div>
        <template>
            <v-tabs vertical >
              <v-tab class="justify-content-left">
                <v-icon left :color="htmlIconColor">mdi-language-html5</v-icon>
                <strong>Template</strong>
              </v-tab>
              <v-tab-item>
                <v-card flat>
                  <v-card-text>
                    <code-highlight>
                      <pre><code class="language-html has-line-data" data-line-start="1" data-line-end="3"><span class="hljs-tag">&lt;<span class="hljs-title">share-it</span> <span class="hljs-attribute">:targets</span>=<span class="hljs-value">"['twitter', 'facebook']"</span> /&gt;</span></code></pre>
                    </code-highlight>
                  </v-card-text>
                </v-card>
              </v-tab-item>
            </v-tabs>
        </template>
        <div class="x-pad">
          <share-it :targets="['twitter', 'facebook']" />
        </div>
        </v-card>
      </section>

      <section class="example">
        <v-card
          class="mx-auto"
          color="#ededed"
        >
        <div class="sub-heading x-pad">
          <a name="example-dark" class="content-link">Dark</a>
        </div>
        <template>
            <v-tabs vertical >
              <v-tab class="justify-content-left">
                <v-icon left :color="htmlIconColor">mdi-language-html5</v-icon>
                <strong>Template</strong>
              </v-tab>
              <v-tab-item>
                <v-card flat>
                  <v-card-text>
                    <code-highlight>
                      <pre><code class="language-html has-line-data" data-line-start="1" data-line-end="3"><span class="hljs-tag">&lt;<span class="hljs-title">share-it</span> <span class="hljs-attribute">dark</span> /&gt;</span></code></pre>
                    </code-highlight>
                  </v-card-text>
                </v-card>
              </v-tab-item>
            </v-tabs>
        </template>
        <div class="x-pad">
          <share-it dark />
        </div>
        </v-card>
      </section>

      <section class="example">
        <v-card
          class="mx-auto"
          color="#ededed"
        >
        <div class="sub-heading x-pad">
          <a name="example-dense" class="content-link">Dense</a>
        </div>
        <template>
            <v-tabs vertical >
              <v-tab class="justify-content-left">
                <v-icon left :color="htmlIconColor">mdi-language-html5</v-icon>
                <strong>Template</strong>
              </v-tab>
              <v-tab-item>
                <v-card flat>
                  <v-card-text>
                    <code-highlight>
                      <pre><code class="language-html has-line-data" data-line-start="1" data-line-end="3"><span class="hljs-tag">&lt;<span class="hljs-title">share-it</span> <span class="hljs-attribute">dense</span> /&gt;</span></code></pre>
                    </code-highlight>
                  </v-card-text>
                </v-card>
              </v-tab-item>
            </v-tabs>
        </template>
        <div class="x-pad">
          <share-it dense></share-it>
        </div>
        </v-card>
      </section>

      <section class="example">
        <v-card
          class="mx-auto"
          color="#ededed"
        >
        <div class="sub-heading x-pad">
          <a name="example-outlined" class="content-link">Outlined</a>
        </div>
        <template>
            <v-tabs vertical >
              <v-tab class="justify-content-left">
                <v-icon left :color="htmlIconColor">mdi-language-html5</v-icon>
                <strong>Template</strong>
              </v-tab>
              <v-tab-item>
                <v-card flat>
                  <v-card-text>
                    <code-highlight>
                      <pre><code class="language-html has-line-data" data-line-start="1" data-line-end="3"><span class="hljs-tag">&lt;<span class="hljs-title">share-it</span> <span class="hljs-attribute">outline</span> /&gt;</span></code></pre>
                    </code-highlight>
                  </v-card-text>
                </v-card>
              </v-tab-item>
            </v-tabs>
        </template>
        <div class="x-pad">
          <share-it outline />
        </div>
        </v-card>
      </section>

    <section class="example">
       <v-card
          class="mx-auto"
          color="#ededed"
        >
        <div class="sub-heading x-pad">
          <a name="example-button-configs" class="content-link">Button configs</a>
        </div>
        <template>
          <v-card>
            <v-tabs vertical>
              <v-tab class="justify-content-left">
                <v-icon left :color="htmlIconColor">mdi-language-html5</v-icon>
                <strong>Template</strong>
              </v-tab>
              <v-tab class="justify-content-left">
                <v-icon left :color="scriptIconColor">mdi-language-javascript</v-icon>
                <strong>Script</strong>
              </v-tab>

              <v-tab-item>
                <v-card flat>
                  <v-card-text>
                    <code-highlight>
                      <pre><code class="language-html has-line-data" data-line-start="1" data-line-end="3"><span class="hljs-tag">&lt;<span class="hljs-title">share-it</span> <span class="hljs-attribute">:share-config</span>=<span class="hljs-value">"share"</span> /&gt;</span></code></pre>
                    </code-highlight>
                  </v-card-text>
                </v-card>
              </v-tab-item>
              <v-tab-item>
                <v-card flat>
                  <v-card-text>
                    <code-highlight>
                      <pre><code class="language-javascript has-line-data" data-line-start="1" data-line-end="21"><span class="hljs-keyword">var</span> share = {
  twitter: {
    size: <span class="hljs-string">"2x"</span>,
    label: <span class="hljs-string">"Custom label!"</span>
  },
  linkedin: {
    size: <span class="hljs-string">"2x"</span>,
    color: <span class="hljs-string">"#333"</span>,
    backgroundColor: <span class="hljs-string">"yellow"</span>
  },
  facebook: {
    size: <span class="hljs-string">"3x"</span>,
    dark: <span class="hljs-literal">true</span>
  },
  whatsapp: {
    size: <span class="hljs-string">"2x"</span>,
    dense: <span class="hljs-literal">true</span>,
    outline: <span class="hljs-literal">true</span>,
    color: <span class="hljs-string">"green"</span>
  },
};</code></pre>
                    </code-highlight>
                  </v-card-text>
                </v-card>
              </v-tab-item>
            </v-tabs>
          </v-card>
        </template>
        <div class="x-pad">
          <share-it :shareConfig="share" />
        </div>
        </v-card>
      </section>

      <section class="example">
        <v-card
          class="mx-auto"
          color="#ededed"
        >
        <div class="sub-heading x-pad">
          <a name="example-icons" class="content-link">Icons</a>
        </div>
        <template>
            <v-tabs vertical >
              <v-tab class="justify-content-left">
                <v-icon left :color="htmlIconColor">mdi-language-html5</v-icon>
                <strong>Template</strong>
              </v-tab>
              <v-tab-item>
                <v-card flat>
                  <v-card-text>
                    <code-highlight>
                      <pre><code class="language-html has-line-data" data-line-start="1" data-line-end="3"><span class="hljs-tag">&lt;<span class="hljs-title">share-it</span> <span class="hljs-attribute">:icons</span>=<span class="hljs-value">"true"</span> /&gt;</span></code></pre>
                    </code-highlight>
                  </v-card-text>
                </v-card>
              </v-tab-item>
            </v-tabs>
        </template>
        <div class="x-pad">
          <share-it icons />
        </div>
        </v-card>
      </section>

      <section class="example">
        <v-card
          class="mx-auto"
          color="#ededed"
        >
        <div class="sub-heading x-pad">
          <a name="example-outlined-icons" class="content-link">Outlined icons</a>
        </div>
        <template>
            <v-tabs vertical >
              <v-tab class="justify-content-left">
                <v-icon left :color="htmlIconColor">mdi-language-html5</v-icon>
                <strong>Template</strong>
              </v-tab>
              <v-tab-item>
                <v-card flat>
                  <v-card-text>
                    <code-highlight>
                      <pre><code class="language-html has-line-data" data-line-start="1" data-line-end="3"><span class="hljs-tag">&lt;<span class="hljs-title">share-it</span> <span class="hljs-attribute">icons</span> <span class="hljs-attribute">outline</span> /&gt;</span></code></pre>
                    </code-highlight>
                  </v-card-text>
                </v-card>
              </v-tab-item>
            </v-tabs>
        </template>
        <div class="x-pad">
          <share-it icons outline />
        </div>
        </v-card>
      </section>

      <section class="example">
        <v-card
          class="mx-auto"
          color="#ededed"
        >
        <div class="sub-heading x-pad">
          <a name="example-rounded-icons" class="content-link">Rounded icons</a>
        </div>
        <template>
            <v-tabs vertical >
              <v-tab class="justify-content-left">
                <v-icon left :color="htmlIconColor">mdi-language-html5</v-icon>
                <strong>Template</strong>
              </v-tab>
              <v-tab-item>
                <v-card flat>
                  <v-card-text>
                    <code-highlight>
                      <pre><code class="language-html has-line-data" data-line-start="1" data-line-end="3"><span class="hljs-tag">&lt;<span class="hljs-title">share-it</span> <span class="hljs-attribute">icons</span> <span class="hljs-attribute">outline</span> <span class="hljs-attribute">round</span> /&gt;</span></code></pre>
                    </code-highlight> 
                  </v-card-text>
                </v-card>
              </v-tab-item>
            </v-tabs>
        </template>
        <div class="x-pad">
          <share-it icons outline round />
        </div>
        </v-card>
      </section>

      <section class="example">
       <v-card
          class="mx-auto"
          color="#ededed"
        >
        <div class="sub-heading x-pad">
          <a name="example-icon-configs" class="content-link">Icon configs</a>
        </div>
        <template>
          <v-card>
            <v-tabs vertical>
              <v-tab class="justify-content-left">
                <v-icon left :color="htmlIconColor">mdi-language-html5</v-icon>
                <strong>Template</strong>
              </v-tab>
              <v-tab class="justify-content-left">
                <v-icon left :color="scriptIconColor">mdi-language-javascript</v-icon>
                <strong>Script</strong>
              </v-tab>

              <v-tab-item>
                <v-card flat>
                  <v-card-text>
                    <code-highlight>
                      <pre><code class="language-html has-line-data" data-line-start="1" data-line-end="3"><span class="hljs-tag">&lt;<span class="hljs-title">share-it</span> <span class="hljs-attribute">:share-config</span>=<span class="hljs-value">"iconConfig"</span> /&gt;</span></code></pre>
                    </code-highlight>
                  </v-card-text>
                </v-card>
              </v-tab-item>
              <v-tab-item>
                <v-card flat>
                  <v-card-text>
                    <code-highlight>
                      <pre><code class="language-javascript has-line-data" data-line-start="1" data-line-end="20"><span class="hljs-keyword">var</span> iconConfig = {
  twitter: {
    icon: <span class="hljs-literal">true</span>,
    size: <span class="hljs-string">"sm"</span>,
    color: <span class="hljs-string">"#333"</span>,
    round: <span class="hljs-literal">true</span>,
    backgroundColor: <span class="hljs-string">"yellow"</span>,
  },
  linkedin: {
    icon: <span class="hljs-literal">true</span>,
    size: <span class="hljs-string">"lg"</span>,
    outline: <span class="hljs-literal">true</span>,
    round: <span class="hljs-literal">true</span>,
  },
  facebook: {
    icon: <span class="hljs-literal">true</span>,
    size: <span class="hljs-string">"2x"</span>,
    outline: <span class="hljs-literal">true</span>,
    round: <span class="hljs-literal">true</span>,
  },
  whatsapp: {
    icon: <span class="hljs-literal">true</span>,
    size: <span class="hljs-string">"4x"</span>,
    outline: <span class="hljs-literal">true</span>,
    round: <span class="hljs-literal">true</span>,
  },
};
              </code></pre>
      </code-highlight>
                  </v-card-text>
                </v-card>
              </v-tab-item>
            </v-tabs>
          </v-card>
        </template>
        <div class="x-pad">
          <share-it :shareConfig="iconConfig" />
        </div>
        </v-card>
      </section>

      <section class="example">
        <v-card
          class="mx-auto"
          color="#ededed"
        >
        <div class="sub-heading x-pad">
          <a name="example-using-slots" class="content-link">Using slots</a>
        </div>
        <template>
            <v-tabs vertical >
              <v-tab class="justify-content-left">
                <v-icon left :color="htmlIconColor">mdi-language-html5</v-icon>
                <strong>Template</strong>
              </v-tab>
              <v-tab-item>
                <v-card flat>
                  <v-card-text>
                    <code-highlight>
                      <pre><code class="has-line-data language-html" data-line-start="1" data-line-end="16"><span class="hljs-tag">&lt;<span class="hljs-title">share-it</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-title">template</span> <span class="hljs-attribute">v-slot:twitter-icon</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-title">v-icon</span>&gt;</span>mdi-twitter<span class="hljs-tag">&lt;/<span class="hljs-title">v-icon</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-title">template</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-title">template</span> <span class="hljs-attribute">v-slot:twitter-label</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-title">em</span>&gt;</span>Tweet it!<span class="hljs-tag">&lt;/<span class="hljs-title">em</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-title">template</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-title">template</span> <span class="hljs-attribute">v-slot:whatsapp-icon</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-title">v-icon</span>&gt;</span>mdi-whatsapp<span class="hljs-tag">&lt;/<span class="hljs-title">v-icon</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-title">template</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-title">template</span> <span class="hljs-attribute">v-slot:whatsapp-label</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-title">em</span>&gt;</span>Share on Whatsapp<span class="hljs-tag">&lt;/<span class="hljs-title">em</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-title">template</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-title">share-it</span>&gt;</span>
</code></pre>
                    </code-highlight> 
                  </v-card-text>
                </v-card>
              </v-tab-item>
            </v-tabs>
        </template>
        <div class="x-pad">
          <share-it>
            <template v-slot:twitter-icon>
              <v-icon>mdi-twitter</v-icon>
            </template>
            <template v-slot:twitter-label>
              <em>Tweet it!</em>
            </template>
            <template v-slot:whatsapp-icon>
              <v-icon>mdi-whatsapp</v-icon>
            </template>
            <template v-slot:whatsapp-label>
              <em>Share on Whatsapp</em>
            </template>
          </share-it>
        </div>
        </v-card>
      </section>
    </section>
    </v-card>
  </div>
</template>

<script>
import codeHighlight from './components/codeHighlight';
export default {
  name: 'app',
  components: {
    codeHighlight
  },
  data() {
    return {
      share: {
        twitter: {
          size: "2x",
          label: "Custom label!",
          round: true,
        },
        linkedin: {
          size: "2x",
          color: "#333",
          backgroundColor: "yellow",
        },
        facebook: {
          size: "3x",
          dark: true
        },
        whatsapp: {
          size: "2x",
          dense: true,
          outline: true,
          color: 'green',
        },
      },
      iconConfig: {
        twitter: {
          icon: true,
          size: "sm",
          color: "#333",
          round: true,
          backgroundColor: 'yellow'
        },
        linkedin: {
          icon: true,
          size: "lg",
          outline: true,
          round: true,
          
        },
        facebook: {
          icon: true,
          size: "2x",
          outline: true,
          round: true
        },
        whatsapp: {
          icon: true,
          size: "3x",
          outline: true,
          round: true
        },
        reddit: {
          icon: true,
          size: "4x",
          outline: true,
          round: true
        },
      },
      htmlIconColor: '#e44d26',
      scriptIconColor: '#f8af00',
      platformList: [
        {
          name: 'Twitter',
          id: 'twitter'
        },
        {
          name: 'LinkedIn',
          id: 'linkedin'
        },
        {
          name: 'Facebook',
          id: 'facebook'
        },
        {
          name: 'Whatsapp',
          id: 'whatsapp'
        },
        {
          name: 'Reddit',
          id: 'reddit'
        },
      ],
      propsList: [
        {
          name: 'text',
          type: 'String',
          default: '""',
          description: 'Caption',
        },
        {
          name: 'url',
          type: 'String',
          default: '""',
          description: 'URL to share',
        },
        {
          name: 'width',
          type: 'Number',
          default: '600',
          description: 'Width of the share window',
        },
        {
          name: 'height',
          type: 'Number',
          default: '600',
          description: 'Height of the share window',
        },
        {
          name: 'dense',
          type: 'Boolean',
          default: 'false',
          description: 'Dense button styling',
        },
        {
          name: 'dark',
          type: 'Boolean',
          default: 'false',
          description: 'Dark button styling',
        },
        {
          name: 'targets',
          type: 'Array',
          default: '[]',
          description: 'Specify social media targets, defaults to all available targets',
        },
        {
          name: 'icons',
          type: 'Boolean',
          default: 'false',
          description: 'Use icons as buttons',
        },
        {
          name: 'outline',
          type: 'Boolean',
          default: 'false',
          description: 'Outline button styling',
        },
        {
          name: 'round',
          type: 'Boolean',
          default: 'false',
          description: 'Round button styling for icons',
        },
        {
          name: 'iconSize',
          type: 'String',
          default: 'lg',
          description: 'Specify icon size. See [size chart](#sizeChart) below',
        },
        {
          name: 'shareConfig',
          type: 'Object',
          default: '{<br><br>linkedin: {},<br><br>twitter: {},<br><br>facebook: {},<br><br>whatsapp: {},<br><br>reddit: {},<br><br>}',
          description: 'Advanced configuration for target specific styling',
        },
      ],
      eventsList: [
        {
          name: 'clicked',
          description: 'Event that is emitted when a share button is clicked',
          value: 'Returns social media platform which was clicked. E.g. ["twitter"]',
        },
      ],
      slotsList: [
        {
          name: '`${platform}-icon`',
          description: 'Custom icon for platform',
        },
        {
          name: '`${platform}-label`',
          description: 'Custom label for platform',
        },
      ],
      content: [
        {
          label: 'Features',
          value: 'features',
        },
        {
          label: 'Installation',
          value: 'installation',
        },
        {
          label: 'Usage',
          value: 'usage',
        },
        {
          label: 'Supported platforms',
          value: 'supported-platforms',
        },
        {
          label: 'API',
          value: 'api',
          children: [
            {
              label: 'Props',
              value: 'api-props',
            },
            {
              label: 'Events',
              value: 'api-events',
            },
            {
              label: 'Slots',
              value: 'api-slots',
            },
          ],
        },
        {
          label: 'Examples',
          value: 'examples',
          children: [
            {
              label: 'Default',
              value: 'example-default',
            },
            {
              label: 'Global configs',
              value: 'example-global-configs',
            },
            {
              label: 'Targets',
              value: 'example-targets',
            },
            {
              label: 'Dark',
              value: 'example-dark',
            },
            {
              label: 'Dense',
              value: 'example-dense',
            },
            {
              label: 'Outlined',
              value: 'example-outlined',
            },
            {
              label: 'Button configs',
              value: 'example-button-configs',
            },
            {
              label: 'Outlined icons',
              value: 'example-outlined-icons',
            },
            {
              label: 'Rounded icons',
              value: 'example-rounded-icons',
            },
            {
              label: 'Icon configs',
              value: 'example-icon-configs',
            },
            {
              label: 'Using slots',
              value: 'example-using-slots',
            },
          ],
        },
      ],
    }
  },
  computed: {
    pageURL () {
      return window.location.href
    }
  },
  mounted() {
    window.addEventListener('hashchange', () => {
        window.scrollTo(window.scrollX, window.scrollY - 100);
    });
  },
  beforeDestroy() {
    window.removeEventListener('hashchange');
  },
}
</script>

<style>

body {
  margin: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.nav-bar {
    height: 3em;
    background-color: #333;
    color: #fff;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 9;
    width: 100%;
}

.nav-logo {
  height: inherit;
  text-align: left;
  padding: 0 1em;
  display: flex;
  align-items: center;
  font-size: 1.5em;
  font-style: italic;
  font-weight: 700;
}

.new-header {
  background-color: rgba(224, 224, 224);
  margin-top: 3em;
  position: relative;
}

.header-container {
  min-height: 25em;
  display: flex;
  justify-content: center;
}

.header {
  height: 50vh;
  width: 80%;
  color: #ffffff;
  margin: 5vh auto;
  align-items: center;
  justify-content: center;
  display: flex;
  background: #34e89e;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #0f3443, #34e89e);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #0f3443, #34e89e); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}

.header-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 95%;
  height: 90%;
  background-color: rgba(0,0,0,0.75);
  color: #fff;
  display: flex;
  align-items: center;
}

.body {
  width: 80%;
  margin: 5vh auto;
}

.heading {
    font-size: 2em;
    font-weight: bold;
    padding: 0.25em 0;
}

.sub-heading {
    font-size: 1.25em;
    font-style: italic;
    padding: 0.25em 1em;
}

.title {
    font-size: 1.5em;
    color: #333;
    padding: 1em;
    border-bottom: 1px solid #ccc;
}

.sub-title {
    font-size: 1.25em;
    text-align: left;
    color: #0f3443;
    margin: 1em 0;
}

.x-pad {
  padding: 1em 0;
}

.example {
  margin: 2.5em 0;
}

.v-tab.justify-content-left {
  justify-content: left;
}

.auto-margin {
  margin: auto;
}

.text-1 {
  background: rgba(0,0,0,0.25);
  padding: 0.5em;
}

.text-2 {
  background: rgba(0,0,0,0.25);
  padding: 1em;
}

.full-width {
  width: 100%;
}

.mr-3 {
  margin-right: 1em;
}

.ml-3 {
  margin-left: 1em;
}

.py-3 {
  padding: 1em 0;
}

.pb-3 {
  padding-bottom: 1em;
}

.d-block {
  display: block;
}

.text-center {
  text-align: center;
}

.text-left {
  text-align: left;
}

.content-link {
  color: #333;
}

.content-link:hover {
  color: #333;
}
</style>
