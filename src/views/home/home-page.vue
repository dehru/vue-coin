<template>
  <div class="home">
    <!--div class="ui active large loader"></div-->
    <div class="ui grid">
      <div class="sixteen wide column coin-market">
        <div class="ui three column grid">
          <div class="column">
            <div class="ui segment banner">
              Market Cap: {{formatCurrency(totalMarketCap)}}
            </div>
          </div>
          <div class="column">
            <div class="ui segment banner">
              Volume (24hr): {{formatCurrency(total24HrVolume)}}
            </div>
          </div>
          <div class="column">
            <div class="ui segment banner">
              BTC Dominance: {{totalBTCPercentage}} %
            </div>
          </div>
        </div>
      </div>
      <div class="sixteen wide column">
        <!-- Header -->
        <div class="ui segment header desktop">
          <div class="ui grid">
            <div class="one wide column">#</div>
            <div class="two wide column">Name</div>
            <div class="one wide column">Symbol</div>
            <div class="three wide column">Market Cap</div>
            <div class="two wide column">Price</div>
            <div class="three wide column">Circulating Supply</div>
            <div class="two wide column">% 1h</div>
            <div class="two wide column">% 24h</div>
          </div>
        </div>
        <home-coin-item v-for="coin in coins" :key="coin.id" :coin="coin" />
      </div>
      
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import utils from '@/utils'
import HomeCoinItem from './components/home-coin-item.vue';
export default {
    name: 'HomePage',
    created() {
      this.formatCurrency = utils.formatCurrency
    },
    computed: {
      ...mapGetters([
        'coins',
      'totalMarketCap',
      'total24HrVolume',
      'totalBTCPercentage'
    ])},
    components: {
      'home-coin-item': HomeCoinItem
    }
}
</script>
<style src="@/assets/styles/home-page.css">

</style>
