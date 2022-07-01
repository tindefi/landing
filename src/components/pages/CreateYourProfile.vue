<template>
  <section class="create-your-profile-page">
    <section class="create-your-profile">
      <article v-if="step === 1" class="create-your-profile__step step1">
        <img class="create-your-profile__img" src="/images/profile/baby-chamelon.svg" loading="lazy" />
        <p class="fz-2 fw-600 has-text-white m-t-10">{{incubated}}</p>
        <p class="has-text-success">{{t('pages.profile.step1.incubated')}}</p>
        <h1 class="create-your-profile__title fz-2 fw-700 text-gradient-5 m-t-30 m-b-10">{{t('pages.profile.step1.title')}}</h1>
        <p>{{t('pages.profile.step1.subtitle')}}</p>
        <button class="tin-button m-t-70 is-info is-xlong" @click.prevent="next">{{t('pages.profile.step1.button')}}</button>
      </article>

      <article v-else class="create-your-profile__form">
        <div class="create-your-profile__form__inputs">
          <div v-show="step === 2" class="create-your-profile__step step2">
            <!-- <div class="back-step" :class="{'is-disabled':loading}" @click.prevent="step = 1"><TinIcon class="back-step-icon" :name="`arrow-left`" size="30px" /></div> -->
            <img src="/images/profile/tin-wallet.svg" alt="Tin DeFi select wallet" width="230">
            <p class="fz-3 fw-600 text-gradient-6 step-title has-text-centered">{{t('pages.profile.step2.title')}}</p>
            <p class="has-text-centered m-t-10">{{t('pages.profile.step2.text')}}</p>

            <a v-if="walletStore.address" class="tin-button wallet-connect-button m-t-30 w-full p-y-10 is-connected" @click.prevent="walletStore.disconnect()">{{walletStore.shortAddress}}</a>
            <a v-else class="tin-button wallet-connect-button m-t-30 w-full p-y-10" @click.prevent="walletStore.connect()">{{walletStore.loading ? t('forms.loading') : t('wallet.connect')}}</a>
          </div>
          <div v-show="step === 3" class="create-your-profile__step step3">
            <div class="back-step" :class="{'is-disabled':loading}" @click.prevent="step = walletStore.address ? 1 : 2"><TinIcon class="back-step-icon" :name="`arrow-left`" size="30px" /></div>
            <img src="/images/profile/tin-adventurer-chamelon.svg" alt="Tin DeFi nice chamelon" width="230">
            <p class="fz-3 fw-600 text-gradient-6 step-title has-text-centered">{{t('pages.profile.step3.title')}}</p>
            <p class="has-text-centered m-t-10">{{t('pages.profile.step3.text')}}</p>
            <label for="_name_x" class="block w-full m-t-20 m-b-5">{{t('pages.profile.step3.label')}}</label>
            <input v-model="form.name" class="tin-input" type="text" name="_name_x" :placeholder="t('pages.profile.step3.placeholder')" autocomplete="off" />
            <small class="field-error has-text-danger block w-full m-t-3" v-if="errors.name">{{errors.name}}</small>
            <button class="tin-button m-t-30 is-info w-full continue-button" @click.prevent="next">{{t('forms.continue')}}</button>
          </div>
          <div v-show="step === 4" class="create-your-profile__step step4">
            <div class="back-step" :class="{'is-disabled':loading}" @click.prevent="step = 3"><TinIcon class="back-step-icon" :name="`arrow-left`" size="30px" /></div>
            <img src="/images/profile/nice-chamelon.svg" alt="Tin DeFi nice chamelon" width="230">
            <p class="fz-3 fw-600 text-gradient-6 step-title has-text-centered">{{t('pages.profile.step4.title', {name: form.name})}}</p>
            <p class="has-text-centered m-t-10">{{t('pages.profile.step4.text')}}</p>
            <label for="_alias_x" class="block w-full m-t-20 m-b-5">{{t('pages.profile.step4.label')}}</label>
            <input v-model="form.alias" class="tin-input" type="text" name="_alias_x" :placeholder="t('pages.profile.step4.placeholder')" autocomplete="off" />
            <small class="field-error has-text-danger block w-full m-t-3" v-if="errors.alias">{{errors.alias}}</small>
            <button class="tin-button m-t-30 is-info w-full continue-button" @click.prevent="next">{{t('forms.continue')}}</button>
          </div>
          <div v-show="step === 5" class="create-your-profile__step step5">
            <div class="back-step" :class="{'is-disabled':loading}" @click.prevent="step = 4"><TinIcon class="back-step-icon" :name="`arrow-left`" size="30px" /></div>
            <div class="create-your-profile__form__avatar">
              <div class="create-your-profile__form__avatar__item" :style="avatarStyle"></div>
            </div>
            <p class="fz-3 fw-600 text-gradient-6 step-title has-text-centered">{{t('pages.profile.step5.title', {name: form.name})}}</p>
            <p class="has-text-centered m-t-10">{{t('pages.profile.step5.text')}}</p>
            <textarea v-model="form.description" class="tin-input m-t-20" rows="3" name="_description_x" :placeholder="t('pages.profile.step5.placeholder')"></textarea>
            <small class="remaining-description-chars">{{remainingDescriptionChars}}</small>
            <button class="tin-button m-t-30 is-info w-full continue-button" @click.prevent="next">{{t('forms.continue')}}</button>
          </div>
          <div v-show="step === 6" class="create-your-profile__step step6">
            <div class="back-step" :class="{'is-disabled':loading}" @click.prevent="step = 5"><TinIcon class="back-step-icon" :name="`arrow-left`" size="30px" /></div>
            <div class="create-your-profile__form__avatar">
              <div class="create-your-profile__form__avatar__item" :style="avatarStyle" @click.prevent="avatarItemClick"></div>
              <div class="avatar-button" @click.prevent="avatarItemClick">
                <TinIcon v-if="avatarStep === 'random'" class="avatar-button-icon is-info" :name="`dice`" size="40px" />
                <TinIcon v-if="avatarStep === 'picture'" class="avatar-button-icon is-info" :name="`camera`" size="40px" />
              </div>
              <input ref="avatarFileInput" class="avatar-file-input" type="file" name="avatar" @change="avatarChange" style="display:none"/>
            </div>
            <p class="fz-3 fw-600 text-gradient-6 step-title has-text-centered">{{t('pages.profile.step6.title', {name: form.name})}}</p>
            <p class="has-text-centered m-t-10">{{t('pages.profile.step6.text')}}</p>
            <button v-if="avatarStep === 'picture'" class="tin-button m-t-30 is-info is-outline w-full avatar-toggle-button" @click.prevent="useRandomAvatar">
              {{t('pages.profile.step6.random')}}
            </button>
            <button v-if="avatarStep === 'random'" class="tin-button m-t-30 is-info is-outline w-full avatar-toggle-button" @click.prevent="uploadProfilePicture">
              <TinIcon class="is-info m-r-10" :name="`camera`" size="20px" /> {{t('pages.profile.step6.picture')}}
            </button>
            <button class="tin-button m-t-30 is-info w-full continue-button" @click.prevent="next">{{t('forms.continue')}}</button>
          </div>
          <div v-show="step === 7" class="create-your-profile__step step7">
            <div class="back-step" :class="{'is-disabled':loading}" @click.prevent="step = 5"><TinIcon class="back-step-icon" :name="`arrow-left`" size="30px" /></div>
            <p class="fz-3 fw-600 text-gradient-6 step-title has-text-centered">{{t('pages.profile.step7.title', {name: form.name})}}</p>
            <p class="has-text-centered m-t-10">{{t('pages.profile.step7.text')}}</p>
            <div class="create-your-profile__form__background m-t-30" :class="{'is-disabled':loading}">
              <div class="create-your-profile__form__background__item" :style="backgroundStyle" @click.prevent="backgroundItemClick">
                <div v-if="!backgroundPreview" class="has-text-centered">
                  <TinIcon class="background-button-icon is-info" :name="`camera`" size="40px" />
                  <div class="has-text-info">{{t('forms.upload')}}</div>
                </div>
              </div>
              <div class="create-your-profile__form__avatar">
                <div class="create-your-profile__form__avatar__item" :style="avatarStyle"></div>
              </div>
              <span class="background-input-name">{{form.name}}</span>
              <span class="background-input-alias">{{form.alias}}</span>
              <input ref="backgroundFileInput" class="background-file-input" type="file" name="background" @change="backgroundChange" style="display:none"/>
            </div>
            <button class="tin-button m-t-30 is-info w-full continue-button" :class="{'is-loading is-disabled': loading}" @click.prevent="storeProfile">{{t('pages.profile.step7.button')}}</button>
          </div>
          <div v-show="step === 'congratulations'" class="create-your-profile__step step8">
            <!-- <div class="back-step" :class="{'is-disabled':loading}" @click.prevent="step = 1"><TinIcon class="back-step-icon" :name="`arrow-left`" size="30px" /></div> -->
            <img src="/images/profile/tin-chamelon-pals.svg" alt="Tin DeFi Scan pals" width="230">
            <p class="fz-3 fw-600 text-gradient-6 step-title has-text-centered">{{t('pages.profile.step8.title')}}</p>
            <p class="has-text-centered m-t-10">{{t('pages.profile.step8.text')}}</p>
          </div>
        </div>

        <div class="create-your-profile__form__preview">
          <template v-if="step === 'congratulations'">
            <span class="create-your-profile__form__preview__data profile-name">{{form.name}}</span>
            <span class="create-your-profile__form__preview__data profile-alias">{{form.alias}}</span>
            <span class="create-your-profile__form__preview__data profile-description">{{form.description}}</span>
            <span class="create-your-profile__form__preview__data profile-background" :style="backgroundStyle"></span>
            <span class="create-your-profile__form__preview__data profile-avatar" :style="avatarStyle"></span>
            <img class="create-your-profile__form__preview__img" src="/images/profile/tin-profile-iphone.png" alt="Tin Defi iPhone PRO shape" loading="lazy" />
            <div class="lottie-container">
              <div class="lottie-wrapper">
                <lottie-player ref="lottie" src="/images/lotties/fireworks_1080x1920p.json" background="transparent"  speed="1"  style="width: 100%;" autoplay></lottie-player>
              </div>
            </div>
          </template>
          <template v-else>
            <img class="create-your-profile__form__preview__img" src="/images/profile/tin-iphone-background.png" alt="Tin Defi iPhone PRO shape" loading="lazy" />
          </template>
        </div>
      </article>
    </section>
  </section>
</template>

<script setup>
  import axios from 'axios'

  import TinIcon from '@/components/tin/TinIcon.vue'

  import { useWalletStore } from '@/stores/wallet'
  import { storeToRefs } from 'pinia'

  const walletStore = useWalletStore()

  const { t } = useI18n()
  const { address } = storeToRefs(useWalletStore())

  const step = ref(1)
  const incubated = ref(0)
  const descriptionMaxChars = ref(120)
  // const randomAvatarIndex = ref(1)
  const maxMB = ref(5)
  const avatarStep = ref('random')
  const avatarPreview = ref(null)
  const avatarFileInput = ref(null)
  const backgroundPreview = ref(null)
  const backgroundFileInput = ref(null)
  const loading = ref(false)

  const form = ref({
    wallet: null,
    name: null,
    alias: null,
    avatar: null,
    background: null,
    description: null,
    default_avatar_id: 1,
  })
  const errors = ref({
    name: null,
    alias: null,
  })

  const remainingDescriptionChars = computed(() => {
    return descriptionMaxChars.value - (form.value.description?.length || 0)
  })

  const name = computed(() => {
    return form.value.name
  })

  const alias = computed(() => {
    return form.value.alias
  })

  const description = computed(() => {
    return form.value.description
  })

  const backgroundStyle = computed(() => {
    return {
      backgroundImage: `url(${backgroundPreview.value})`,
    }
  })

  const avatarStyle = computed(() => {
    let url = avatarStep.value === 'picture' && avatarPreview.value ? avatarPreview.value : `/images/profile/avatars/tiburon${form.value.default_avatar_id}.svg`

    return {
      backgroundImage: `url(${url})`,
    }
  })

  watch(address, (newVal, oldVal) => {
    form.value.wallet = newVal

    if(newVal && step.value === 2){
      step.value = 3
    }
  })

  watch(form.value, (newVal, oldVal) => {
    removeErrors()
  })

  watch(name, (newVal, oldVal) => {
    if(newVal?.length > 20) form.value.name = oldVal
  })

  watch(alias, (newVal, oldVal) => {
    if(newVal?.length > 30){
      form.value.alias = oldVal
    }

    if(newVal?.length === 1 && newVal[0] !== '@'){
      form.value.alias = `@${newVal}`
    }

    if(oldVal?.length > newVal?.length && newVal === '@'){
      form.value.alias = ''
    }

    if(form.value.alias){
      let regex = /^@{1}[0-9A-Za-z\-_.]+$/
      if(!regex.test(form.value.alias)) {
          form.value.alias = oldVal
      }
    }

    checkAlias()
  })

  watch(description, (newVal, oldVal) => {
    if(newVal?.length > descriptionMaxChars.value) form.value.description = oldVal
  })

  const next = async () => {
    await setErrors()

    if(Object.values(errors.value).some(o => !!o)){
      // alert(t('errors.correct_before_proceed'))
      return
    }

    if(step.value === 1){
      step.value = walletStore.address ? 3 : 2
      getProfileByWallet()
    }else{
      step.value ++
    }
  }

  const setErrors = async () => {
    removeErrors()

    if(step.value === 3){
      if(!form.value.name) errors.value.name = t('errors.required_field')
      if(form.value?.name?.length < 4) errors.value.name = t('errors.min_chars', {num: 4})
    }
    if(step.value === 4){
      if(!form.value.alias) errors.value.alias = t('errors.required_field')
      if(form.value.alias.length < 6) errors.value.alias = t('errors.min_chars', {num: 5})
      await checkAlias()
    }
  }

  const removeErrors = () => {
    errors.value = {
      name: null,
      alias: null,
    }
  }

  const avatarItemClick = () => {
    avatarStep.value === 'random' ? setRandomAvatar() : uploadProfilePicture()
  }

  const setRandomAvatar = () => {
    let rand =  Math.ceil(Math.random() * 30)
    while(rand === form.value.default_avatar_id){
      rand =  Math.ceil(Math.random() * 30)
    }
    form.value.default_avatar_id = rand
  }

  const uploadProfilePicture = () => {
    avatarFileInput.value.click()
  }

  const avatarChange = (e) => {
    let files = e.target.files || e.originalEvent.dataTransfer.files

    if(files){
      if(files.length === 0) return
      form.value.avatar = files[0]
      let size = files[0].size

      if(size > maxMB.value * 1000000){
        alert(t('errors.max_file_size', {mb:maxMB.value}))
        return
      }

      let fileName = files[0].name
      let fileSize = size > 1000000 ? (Math.round(size/1000000*10)/10) + ' MB' : Math.round(size/1000*10)/10 + ' KB'


      let img
      img = new Image()
      img.onload = function () {
        // console.info(fileName, fileSize)
        // let reader = new FileReader()
        // reader.onload = (e) => {
        //   vue.previewUrl = e.target.result
        // }
        // reader.readAsDataURL(files[0])
      }

      let _URL = window.URL || window.webkitURL
      let imageURL = _URL.createObjectURL(files[0])
      avatarPreview.value = imageURL
      avatarStep.value = 'picture'
    }else{
      // clearFile()
    }
  }

  const backgroundItemClick = () => {
    backgroundFileInput.value.click()
  }

  const backgroundChange = (e) => {
    let files = e.target.files || e.originalEvent.dataTransfer.files

    if(files){
      if(files.length === 0) return
      form.value.background = files[0]
      let size = files[0].size

      if(size > maxMB.value * 1000000){
        alert(t('errors.max_file_size', {mb:maxMB.value}))
        return
      }

      let fileName = files[0].name
      let fileSize = size > 1000000 ? (Math.round(size/1000000*10)/10) + ' MB' : Math.round(size/1000*10)/10 + ' KB'


      let img
      img = new Image()
      img.onload = function () {
        // console.info(fileName, fileSize)
        // let reader = new FileReader()
        // reader.onload = (e) => {
        //   vue.previewUrl = e.target.result
        // }
        // reader.readAsDataURL(files[0])
      }

      let _URL = window.URL || window.webkitURL
      let imageURL = _URL.createObjectURL(files[0])
      backgroundPreview.value = imageURL
    }else{
      // clearFile()
    }
  }

  const useRandomAvatar = () => {
    avatarStep.value = 'random'
    clearAvatar()
  }

  const clearAvatar = () => {
    form.value.avatar = null
    avatarPreview.value = null
    avatarFileInput.value.value = null
  }

  const clearBackground = () => {
    form.value.background = null
    backgroundPreview.value = null
    backgroundFileInput.value.value = null
  }

  const getProfileByWallet = async () => {
    await axios.get(`http://localhost:8000/profiles/search-by-wallet/${walletStore.address}`).then(response => { // https://api.tindefi.net/profiles/count
      if (response.data) {
        step.value = 'congratulations'
        form.value.name = response.data.name
        form.value.alias = '@' + response.data.alias
        form.value.description = response.data.description
        form.value.wallet = response.data.wallet
      }

      console.log(form.value.alias)
    })
  }

  // TODO: descomentar función y cambiar URL
  const getProfilesCount = async () => {
    await axios.get(`http://localhost:8000/profiles/count`).then(response => { // https://api.tindefi.net/profiles/count
      incubated.value = response.data
    })
  }

  // TODO: descomentar y cambiar URL
  const checkAlias = async () => {
    if(form.value.alias?.length > 5 && step.value != 'congratulations') {
      const res = await axios.get(`http://localhost:8000/profiles/search-by-alias/${form.value.alias.substring(1)}`) // https://api.tindefi.net/users/search-by-alias/${form.value.alias}
      if(res.data) errors.value.alias = t('errors.alias_taken')
    }
  }

  // TODO: descomentar y cambiar URL
  const storeProfile = async () => {
    // step.value = 'congratulations' //TODO: eliminar esta línea
    if(Object.values(errors.value).some(o => !!o)){
      alert(t('errors.correct_before_proceed'))
      return
    }

    loading.value = true

    let data = new FormData()
    data.append('wallet', walletStore.address)
    data.append('name', form.value.name)
    data.append('alias', form.value.alias.substring(1))
    data.append('avatar', form.value.avatar)
    data.append('default_avatar_id', form.value.default_avatar_id)
    data.append('background', form.value.background)
    data.append('description', form.value.description)

    await axios.post(`http://localhost:8000/profiles`, data).then(response => { // https://api.tindefi.net/profiles
      step.value = 'congratulations'
    }).catch(error => {
      alert(t('errors.correct_before_proceed'))
    }).finally(() => {
      loading.value = false
    })
  }

  onMounted(() => {
    setRandomAvatar()
    // TODO: descomentar línea
    getProfilesCount()
  })
</script>
