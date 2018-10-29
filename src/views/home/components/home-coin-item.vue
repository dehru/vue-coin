<template>
<div class="ui segment header desktop">
    <div class="ui grid">
        <div class="one wide column">{{coin.rank}}</div>
        <div class="two wide column">{{coin.name}}</div>
        <div class="one wide column">{{coin.symbol}}</div>
        <div class="three wide column">{{formatCurrency(coin.quotes.USD.market_cap)}}</div>
        <div class="two wide column">{{formatCurrency(coin.quotes.USD.price)}}</div>
        <div class="three wide column">{{coin.circulating_supply}} {{coin.symbol}}</div>
        <div class="two wide column">{{coin.quotes.USD.percent_change_1h}} %</div>
        <div class="two wide column">{{coin.quotes.USD.percent_change_24h}} %</div>
    </div>
</div>
</template>
<script>
import utils from '@/utils'
export default {
    name: 'HomeCoinItem',
    props: {
        coin: Object
    },
    created() {
        this.formatCurrency = utils.formatCurrency
    }
}
</script>
<style src="@/assets/styles/home-coin-item.css">

</style>

