<template>
  <div class="vue-share-it-wrapper">

    <template v-for="(config, index) in finalConfig">
      <a :key="`share-target-${index}`" :href="config.url" target="popup" @click="openPopUp(config)" :style="{ color: config.color || config.defaultColor }" :class="{ 'share-icon': config.icon, 'share-button': !config.icon, 'icon-border': config.icon && config.border, 'icon-border-round': config.icon && config.border && config.roundBorder }" >
        <div v-if="config.icon">
          <font-awesome-icon :icon="['fab', config.defaultIcon]" :size="config.size || 'lg'" :style="{ color: config.color || config.defaultColor }" />
        </div>
        <div v-else>
          <share-button :dark="config.dark || false" :dense="config.dense || false" :style="{ color: config.color || config.defaultColor }">
            <font-awesome-icon :icon="['fab', config.defaultIcon]" :size="(config.dense) ? 'lg' : config.size || 'lg'" />
            <label>{{ config.label || config.defaultLabel }}</label>
          </share-button>
        </div>
      </a>
    </template>

    <!-- <a :href="twitterConfig.url" target="popup" @click="openPopUp(twitterConfig)" v-if="twitterConfig">
      <div v-if="twitterConfig.icon">
        <font-awesome-icon :icon="['fab', 'twitter']" :size="twitterConfig.size || 'lg'" :style="{ color: twitterConfig.color }" />
      </div>
      <div v-else>
        <share-button :dark="twitterConfig.dark || false" :dense="twitterConfig.dense || false" :style="{ color: twitterConfig.color }">
          <font-awesome-icon :icon="['fab', 'twitter']" :size="(twitterConfig.dense) ? 'lg' : twitterConfig.size || 'lg'" />
          <label>{{ twitterConfig.label || 'Twitter' }}</label>
        </share-button>
      </div>
    </a>

    <a :href="linkedinConfig.url" target="popup" @click="openPopUp(linkedinConfig)" v-if="linkedinConfig">
      <div v-if="linkedinConfig.icon">
        <font-awesome-icon :icon="['fab', 'linkedin']" :size="linkedinConfig.size || 'lg'" :style="{ color: linkedinConfig.color }" />
      </div>
      <div v-else>
        <share-button :dark="linkedinConfig.dark || false" :dense="linkedinConfig.dense || false" :style="{ color: linkedinConfig.color }">
          <font-awesome-icon :icon="['fab', 'linkedin']" :size="(linkedinConfig.dense) ? 'lg' : linkedinConfig.size || 'lg'" />
          <label>{{ linkedinConfig.label || 'LinkedIn' }}</label>
        </share-button>
      </div>
    </a>

    <a class="social-button" :href="facebookConfig.url" target="popup" @click="openPopUp(facebookConfig)" v-if="facebookConfig">
      <font-awesome-icon :icon="['fab', 'facebook']" :style="{ color: facebookConfig.color }"  />
      {{facebookConfig.caption}}
    </a>

    <a class="social-button" :href="whatsappConfig.url" target="popup" @click="openPopUp(whatsappConfig)" v-if="whatsappConfig">
      <font-awesome-icon :icon="['fab', 'whatsapp']" :style="{ color: whatsappConfig.color }"  />
      {{whatsappConfig.caption}}
    </a> -->

  </div>
</template>

<script>

export default {
  name: 'share-it',
  props: {
    shareConfig: {
      type: Object,
      default: {}
    },
    text: {
      type: String,
      default: ''
    },
    url: {
      type: String,
      default: window.location.href
    },
    width: {
      type: Number,
      default: 600
    },
    height: {
      type: Number,
      default: 600
    }
  },
  data () {
    return {
    }
  },
  computed: {
    finalConfig () {
      let baseConfig = this.shareConfig;
      for(var key in this.shareConfig){
        // skip loop if the property is from prototype
        if(!this.shareConfig.hasOwnProperty(key)) continue;

        switch (key) {
          case 'twitter':
            baseConfig[key].platform = 'twitter';
            baseConfig[key].defaultIcon = 'twitter';
            baseConfig[key].defaultLabel = 'Twitter';
            baseConfig[key].defaultColor = '#1DA1F2';
            break;

          case 'linkedin':
            baseConfig[key].platform = 'linkedin';
            baseConfig[key].defaultIcon = 'linkedin';
            baseConfig[key].defaultLabel = 'Linkedin';
            baseConfig[key].defaultColor = '#0077B5';
            break;

          case 'facebook':
            baseConfig[key].platform = 'facebook';
            baseConfig[key].defaultIcon = 'facebook';
            baseConfig[key].defaultLabel = 'Facebook';
            baseConfig[key].defaultColor = '#3b5998';
            break;

          case 'whatsapp':
            baseConfig[key].platform = 'whatsapp';
            baseConfig[key].defaultIcon = 'whatsapp';
            baseConfig[key].defaultLabel = 'Whatsapp';
            baseConfig[key].defaultColor = '#25d366';
            break;

          default:
            baseConfig[key].platform = '';
            baseConfig[key].defaultIcon = '';
            baseConfig[key].defaultLabel = '';
        }
      }
      return baseConfig;
    },
    twitterConfig () {
      if (this.shareConfig.twitter) {
        this.shareConfig.twitter.platform = 'twitter';
        return this.shareConfig.twitter;
      }
      return false;
    },
    linkedinConfig () {
      if (this.shareConfig.linkedin) {
        this.shareConfig.linkedin.platform = 'linkedin';
        return this.shareConfig.linkedin;
      }
      return false;
    },
    facebookConfig () {
      if (this.shareConfig.facebook) {
        this.shareConfig.facebook.platform = 'facebook';
        return this.shareConfig.facebook;
      }
      return false;
    },
    whatsappConfig () {
      if (this.shareConfig.whatsapp) {
        this.shareConfig.whatsapp.platform = 'whatsapp';
        return this.shareConfig.whatsapp;
      }
      return false;
    },
  },
  methods: {
    openPopUp (config) {
      let url = '';
      switch (config.platform) {
        case 'twitter':
          url = `http://twitter.com/share?text=${config.text || this.text}&url=${this.url}&hashtags=${config.hashtags || ''}`;
          break;
        
        case 'linkedin':
          url = `https://www.linkedin.com/shareArticle?mini=true&url=${this.url}&title=${config.text || this.text}${(config.summary) ? '&summary'+config.summary : ''}${(config.source) ? '&source='+config.source : ''}`;
          break;

        case 'facebook':
          url = `https://facebook.com/sharer.php?display=popup&u=${this.url}`;
          break;
        default:
          url = false;
      }
      if (url) {
        console.log('> url : ', url);
        window.open( url, 'popup' , `width=${this.width},height=${this.height}` );
      }
      return false;
    }
  }
}
</script>

<style scoped>

.vue-share-it-wrapper {
  display: inline-flex;
}

.icon-border {
  border: 1px solid;
}

.icon-border-round {
  border-radius: 50%;
}

.vue-share-it-wrapper a {
    padding: 0.5em;
    color: #ccc;
    cursor: pointer;
}

.share-icon {
  margin: 0 0.5em;
}


</style>
