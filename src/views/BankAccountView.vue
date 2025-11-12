<script setup>
// Import des APIs Vue et du store Pinia pour accéder aux données bancaires
import {ref} from "vue";
import {useBankStore} from "@/stores/bank.js";
import { formatDateTime, formatAmount } from "@/utils/formatters.js"; // fonctions de formatage

const number = ref('') // input (le input est dans le html) user account id

// Accès au store bancaire (amount + transactions)
const bankStore = useBankStore()

</script>

<template>
  <div>
    <h1>Account amount</h1>

    <!-- saisie numéro compte et actions tierses -->
    <span>account number</span><input v-model="number">
    <button @click="bankStore.getAccountAmount(number)">Get amount</button>
    <button @click="bankStore.getAccountTransactions(number)">Get transactions</button>

    <!-- Affichage du solde disponible pour le compte saisi -->
    <p>available amount: {{bankStore.accountAmount}}</p>
    <hr />
    <!-- Liste des transactions du compte saisi -->
    <p>passed transactions:</p>

    <!-- vérifie si le tableau contient au moins un élément -->
    <ul v-if="bankStore.accountTransactions.length"> <!-- au moins 1 -->
      <li v-for="t in bankStore.accountTransactions" :key="t._id"> <!-- key = id unique pour chaque transaction-->
        <!-- Affiche la date (format FR) et le montant formaté en EUR -->
        <p>Transaction date : {{ formatDateTime(t.date) }}, Amount : {{ formatAmount(t.amount) }}</p>
      </li>
    </ul>
    <p v-else>Aucune transaction</p>

  </div>

</template>
