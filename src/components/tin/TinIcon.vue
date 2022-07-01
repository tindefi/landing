<template>
  <i class="tin-icon" :class="{'is-spinning':spin}" :style="styles"></i>
</template>

<script>
  export default {
    props: {
      name: {
        Type: String,
        required: true,
      },
      color: {
        Type: String,
        default: '#B5BCC8',
      },
      size: {
        Type: String,
        default: '24px',
      },
      spin: Boolean,
    },

    data () {
      return {}
    },

    computed: {
      styles() {
        return {
          '--color': this.color,
          '--mask': `url("/icons/${this.name}.svg") no-repeat center / contain`,
          '--size': this.size,
        }
      }
    },

    methods: {},

    mounted() {}
  }
</script>

<style lang="scss" scoped>
  @import '@/sass/general/variables.scss';

  .tin-icon{
    display: inline-block;
    width: var(--size);
    height: var(--size);
    background-color: var(--color);
    mask: var(--mask);
    -webkit-mask: var(--mask);

    &.is-spinning{
      animation: spin 1s linear infinite;
    }

    &.is-success{ background-color: $success-color; }
    &.is-info{ background-color: $info-color; }
    &.is-warning{ background-color: $warning-color; }
    &.is-danger{ background-color: $danger-color; }
    &.is-dark{ background-color: $text-color-dark; }
    &.is-light{ background-color: $text-color-light; }
    &.is-lighter{ background-color: $text-color-lighter; }
    &.is-black{ background-color: #000; }
    &.is-white{ background-color: #fff; }
  }

  @keyframes spin {
    0% { transform: rotate(0deg) }
    100% { transform: rotate(359deg) }
  }
</style>
