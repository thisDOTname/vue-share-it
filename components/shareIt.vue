<template>
  <div class="vue-share-it-wrapper">
    <template v-for="(config, index) in finalConfig">
      <a
        :key="`share-target-${index}`"
        href="javascript:void(0)"
        target="_blank"
        @click="openPopUp(config)"
        :style="{ 
          color: (!(icons || config.icon)) ? config.color || config.defaultColor : false,
          background: (config.icon && config.backgroundColor) ? config.backgroundColor : false,
          width: (icons || config.icon) ? config.iconSize || defaultIconDimension : 'auto',
          height: (icons || config.icon) ? config.iconSize || defaultIconDimension : 'auto',
        }"
        :class="{
          'share-icon': icons || config.icon,
          'share-button': !config.icon && !icons,
          'icon-border': (icons || config.icon) && (outline || config.outline),
          'icon-border-round': (icons || config.icon) && ((outline || config.outline) || (round || config.round))
        }"
      >
        <div v-if="icons || config.icon">
          <font-awesome-icon
            :icon="['fab', config.defaultIcon]"
            :size="config.size || iconSize || defaultIconSize"
            :style="{ color: config.color || config.defaultIconColor || config.defaultColor }"
          />
        </div>
        <div v-else>
          <share-button
            :outline="outline || config.outline || false"
            :dark="dark || config.dark || false"
            :dense="dense || config.dense || false"
            :style="{ 
              color: (outline) ? config.defaultIconColor : config.color || config.defaultColor,
              background: config.backgroundColor || config.defaultBackground
            }"
          >
            <slot :name="`${config.platform}-icon`">
              <font-awesome-icon
                :icon="['fab', config.defaultIcon]"
                :size="config.size || defaultIconSize"
              />
            </slot>
            <slot :name="`${config.platform}-label`">
              <label>{{ config.label || config.defaultLabel }}</label>
            </slot>
          </share-button>
        </div>
      </a>
    </template>
  </div>
</template>

<script>

export default {
  name: 'share-it',
  props: {
    shareConfig: {
      type: Object,
      default: () => {
        return {
          linkedin: {},
          twitter: {},
          facebook: {},
          whatsapp: {},
          reddit: {},
        }
      }
    },
    targets: {
      type: Array,
      default: () => {
        return []
      }
    },
    text: {
      type: String,
      default: ''
    },
    url: {
      type: String,
      default: ''
    },
    width: {
      type: Number,
      default: 600
    },
    height: {
      type: Number,
      default: 600
    },
    dense: {
      type: Boolean,
      default: false
    },
    dark: {
      type: Boolean,
      default: false
    },
    icons: {
      type: Boolean,
      default: false
    },
    outline: {
      type: Boolean,
      default: false
    },
    round: {
      type: Boolean,
      default: false
    },
    iconSize: {
      type: String,
      default: 'lg'
    }
  },
  data () {
    return {
      configObj: this.shareConfig || {},
      defaultIconSize: 'lg',
      defaultIconDimension: '2em'
    }
  },
  computed: {
    finalConfig () {
      const vm = this;
      let baseConfig = {};
      if (vm.targets.length) {
        baseConfig = Object.keys(vm.configObj)
          .filter(key => vm.targets.includes(key))
          .reduce((obj, key) => {
            obj[key] = vm.configObj[key];
            return obj;
          }, {});
      } else {
        baseConfig = vm.configObj;
      }
      
      for(var key in baseConfig){
        if(!vm.configObj.hasOwnProperty(key)) continue;

        switch (key) {
          case 'twitter':
            baseConfig[key].platform = 'twitter';
            baseConfig[key].defaultIcon = 'twitter';
            baseConfig[key].defaultLabel = 'Twitter';
            baseConfig[key].defaultColor = '#FFFFFF';
            baseConfig[key].defaultBackground = '#1DA1F2';
            baseConfig[key].defaultIconColor = '#1DA1F2';
            break;

          case 'linkedin':
            baseConfig[key].platform = 'linkedin';
            baseConfig[key].defaultIcon = 'linkedin';
            baseConfig[key].defaultLabel = 'Linkedin';
            baseConfig[key].defaultColor = '#FFFFFF';
            baseConfig[key].defaultBackground = '#0077B5';
            baseConfig[key].defaultIconColor = '#0077B5';
            break;

          case 'facebook':
            baseConfig[key].platform = 'facebook';
            baseConfig[key].defaultIcon = 'facebook-f';
            baseConfig[key].defaultLabel = 'Facebook';
            baseConfig[key].defaultColor = '#FFFFFF';
            baseConfig[key].defaultBackground = '#3b5998';
            baseConfig[key].defaultIconColor = '#3b5998';
            break;

          case 'whatsapp':
            baseConfig[key].platform = 'whatsapp';
            baseConfig[key].defaultIcon = 'whatsapp';
            baseConfig[key].defaultLabel = 'Whatsapp';
            baseConfig[key].defaultColor = '#FFFFFF';
            baseConfig[key].defaultBackground = '#25d366';
            baseConfig[key].defaultIconColor = '#25d366';
            break;

          case 'reddit':
            baseConfig[key].platform = 'reddit';
            baseConfig[key].defaultIcon = 'reddit-alien';
            baseConfig[key].defaultLabel = 'Reddit';
            baseConfig[key].defaultColor = '#FFFFFF';
            baseConfig[key].defaultBackground = '#ff4500';
            baseConfig[key].defaultIconColor = '#ff4500';
            break;

          default:
            baseConfig[key].platform = '';
            baseConfig[key].defaultIcon = '';
            baseConfig[key].defaultLabel = '';
        }

        if (baseConfig[key].icon || vm.icons) {
          baseConfig[key].iconSize = vm.getIconSize(baseConfig[key].size || vm.iconSize || vm.defaultIconSize);
        }
      }
      return baseConfig;
    },
  },
  methods: {
    openPopUp (config) {
      const vm = this;
      let shareUrl = '';
      switch (config.platform) {
        case 'twitter':
          shareUrl = 'http://twitter.com/share';
          if (vm.url) {
            shareUrl += `?url=${encodeURIComponent(vm.url)}`;  
          } else {
            shareUrl += `?url=${encodeURIComponent(document.location.href)}`;
          }
          if (config.text || vm.text) {
            shareUrl += `&text=${config.text || vm.text}`;
          }
          if (config.hashtags) {
            shareUrl += `&hashtags=${config.hashtags || ''}`;
          }
          break;

        case 'linkedin':
          shareUrl = 'https://www.linkedin.com/shareArticle?mini=true';
          if (vm.url) {
            shareUrl += `&url=${encodeURIComponent(vm.url)}`;
          } else {
            shareUrl += `&url=${encodeURIComponent(document.location.href)}`;
          }
          if (config.text || vm.text) {
            shareUrl += `&title=${config.text || vm.text}`;
          }
          if (config.summary) {
            shareUrl += `&summary=${config.summary || ''}`;
          }
          if (config.source) {
            shareUrl += `&source=${config.source || ''}`;
          }
          break;

        case 'facebook':
          shareUrl = 'https://facebook.com/sharer.php?display=popup';
          if (vm.url) {
            shareUrl += `&u=${encodeURIComponent(vm.url)}`;
          } else {
            shareUrl += `&u=${encodeURIComponent(document.location.href)}`;
          }
          break;

        case 'whatsapp':
          shareUrl = 'whatsapp://send?text=';
          if (config.text) {
            shareUrl += `${config.text} `;
          } else {
            shareUrl += `${vm.text} `;
          }
          if (vm.url) {
            shareUrl += `${encodeURIComponent(vm.url)}`;
          } else {
            shareUrl += `${encodeURIComponent(document.location.href)}`;
          }
          break;

        case 'reddit':
          shareUrl = 'http://www.reddit.com/submit';
          if (vm.url) {
            shareUrl += `?url=${encodeURIComponent(vm.url)}`;
          } else {
            shareUrl += `?url=${encodeURIComponent(document.location.href)}`;
          }
          if (config.text || vm.text) {
           shareUrl += `&title=${config.text || vm.text}`;
          }
          break;

        default:
          shareUrl = false;
      }
      if (shareUrl) {
        window.open( shareUrl, 'popup' , `width=${vm.width},height=${vm.height}` );
        vm.$emit('clicked', config.platform);
      }
      return false;
    },
    getIconSize(size) {
      switch (size) {
        case 'xs':
          return '1.5em';
          break;

        case 'sm':
          return '1.75em';
          break;
        
        case 'lg':
          return '2em';
          break;

        case '2x':
          return '3em';
          break;

        case '3x':
          return '4.5em';
          break;

        case '4x':
          return '6em';
          break;

        case '5x':
          return '7em';
          break;

        case '6x':
          return '8.5em';
          break;

        case '7x':
          return '9.5em';
          break;

        case '8x':
          return '10.5em';
          break;

        case '9x':
          return '12em';
          break;

        case '10x':
          return '13em';
          break;

        default:
          return '2em';
      }
    }
  }
}
</script>

<style scoped>

.vue-share-it-wrapper {
  display: inline-flex;
  flex-wrap: wrap;
}

.icon-border {
  border: 1px solid;
}

.icon-border-round {
  border-radius: 50%;
}

.vue-share-it-wrapper a {
    padding: 0.5em;
    color: #ccc !important;
    cursor: pointer;
}

.share-icon {
  margin: 0 0.5em;
  display: flex;
  align-items: center;
  justify-content: center;
}


</style>
