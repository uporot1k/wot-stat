<template lang="pug">
  .ui-wrapper
    input(
    name="nickname"
    placeholder='Введи ник тутлиста'
    @input="sendRequest"
    @keyup.enter="getFirstInList"
    autocomplete='false'
    )
    ul.list(
      v-if="list"
    )
      li.listItem(
        v-for="(element, index) in list"
        @click="setNick"
        :tabindex="index+1"
      )
        router-link(
          :to="{name: 'user', params: {userId: element.account_id}}"
        )
          | {{element.nickname}}
</template>

<script>
  import 'axios'
  import { mapActions, mapState } from 'vuex'

	export default {
		name: "Search",
    data () {
		  return {
        tabindex: 0
      }
    },
    computed: {
		  listLength () {
		    return this.list.length
      },
      ...mapState({
        list: state => state.list,
        nickname: state => state.nickname
      })
    },
    created () {
		  const list = document.querySelectorAll('.listItem')

      document.addEventListener('keydown', e => {
        console.log(e)
        if (e.keyCode === 40 || e.keyCode === 38) {

          if (e.keyCode === 40) {

          }
          if (e.keyCode === 38) {

          }
        }
      })
    },
    methods: {
      ...mapActions([
        'getID',
        'setNick',
        'getUserStat'
      ]),

      sendRequest (e) {
        this.getID(e.target.value)
      },
      setNick (e) {
        let id = e.target.getAttribute('data-id')
        this.getUserStat(id)
      },
      getFirstInList (e) {
        let id = this.list[0].account_id
        this.getUserStat(id)
      }
    }
	}
</script>

<style lang="stylus" scoped>
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,500,700,900&subset=cyrillic,cyrillic-ext');
  input
    width: 514px;
    height: 56px;
    box-shadow: -10px 9px 21px rgba(128, 152, 213, 0.07);
    background-color: #ffffff;
    border 0
    padding 0 24px
    outline 0
  ul
    list-style none
    background-color: #fefeff
    margin 0
    padding 30px 0
  li
    height 40px
    font-family 'Roboto'
    font-size 15px
    padding 0 50px
    cursor:pointer
    display: flex
    align-items: center
    justify-content: flex-start
    &:focus,
    &:hover
      background-color: #f6f7fa;
      color: #8954ba;

</style>
