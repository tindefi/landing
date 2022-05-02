<template>
  <div class="modal-item">
    <header>
      <h2 class="header-title">
        Participar En La ICO
      </h2>
      <h4 class="header-text">
        La moneda requerida para invertir en la ICO es BUSD.
      </h4>
    </header>
    <div class="main-content">
      <div class="invest-amount-container">
        <div class="invest-amount-text">
          Cantidad a invertir
        </div>
        <div class="invest-amount-amount">
          <input v-model="amount" class="invest-amount-input" placeholder="1,000.00" type="text" inputmode="decimal" min="0" step="0.01" size="3" maxlength="19">
          <span class="invest-amount-token"><img src="/images/busd.png" alt="bnb"> BUSD</span>
        </div>
        <div class="invest-amount-utils">
          <span class="invest-amount-utils-text">
            Balance: {{ balances.busd }}
          </span>
          <div class="invest-amount-utils-buttons">
            <button>
              MAX
            </button>
            <button>
              30%
            </button>
            <button>
              60%
            </button>
          </div>
        </div>
      </div>
      <div class="return-amount-container">
        <div class="return-amount-text">
          ROI esperado al precio de listado
        </div>
        <div class="return-amount-amount">
          <input v-model="roiAmount" readonly>
        </div>
        <div class="return-amount-utils">
          <span class="return-amount-utils-tin">
            ~ 2,681.35 TIN
          </span>
          <span class="return-amount-utils-roi">
            (+225.17%)
          </span>
        </div>
      </div>
    </div>
    <footer>
      <div class="button-container">
        <button>
          Invertir
        </button>
      </div>
    </footer>
  </div>
</template>

<script setup>
  import { watch, ref, toRefs } from "vue"
  import { storeToRefs } from "pinia"
  import { formatMoney } from "@/modules/utils.js"

  import { useWalletStore } from "@/stores/wallet"

  const { balances, web3 } = storeToRefs(useWalletStore())

  const tinPrice = ref(5) // Price of the TIN token

  const amount = ref()
  const roiAmount = ref(0)

  // Example
  roiAmount.value = formatMoney(10000)

  watch(amount, (currentValue, oldValue) => {
    currentValue = currentValue.replace(",", ".") // In case of iPhone, there is no ".", but only ","
    let valid = (/^[0-9]*\.?[0-9]*$/).test(currentValue)
    if(!valid){
      amount.value = oldValue
      return
    }
  })
</script>
