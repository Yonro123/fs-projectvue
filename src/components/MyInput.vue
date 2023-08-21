<template>
  <div class="input">
    <label v-if="props.label"
      >{{ props.label }}
      <input
        :value="props.modelValue"
        :type="props.type"
        @input="callEvent"
        :placeholder="props.placeholder"
    /></label>
  </div>
</template>

<script setup lang="ts">
interface Props {
  label?: string;
  placeholder?: string;
  type: string;
  modelValue?: string;
}
const props = defineProps<Props>();

interface Emits {
  (e: 'update:modelValue', value: string): void;
}
const emits = defineEmits<Emits>();
const callEvent = (event: any) => emits('update:modelValue', event.target?.value);
</script>

<style scoped>
.input label {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 300px;
}
.input label input {
  width: 200px;
  padding: 10px 20px;
  border-radius: 20px;
}
</style>
