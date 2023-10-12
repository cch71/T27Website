<script setup lang="ts">
import type { PropType } from 'vue'
</script>

<template>
  <section class="t27banner">
    <div class="layout">
      <div class="content">
        <p v-if="$slots.announce" class="announce">
          <ContentSlot :use="$slots.announce" unwrap="p" />
        </p>

        <h1 class="title">
          <ContentSlot :use="$slots.title" unwrap="p">
          </ContentSlot>
        </h1>

        <p v-if="$slots.description" class="description">
          <ContentSlot :use="$slots.description" unwrap="p">
          </ContentSlot>
        </p>
	 </div>
	</div>
  </section>
</template>

<style scoped lang="ts">
css({
  '.t27banner': {
	backgroundImage: 'url("/t27_header.png")',
	backgroundSize: 'contain',
    width: '-webkit-fill-available',
    pointerEvents: 'none',
    padding: '{space.5} 0',
    marginBottom: '{space.5}',
    '@sm': {
      padding: '{space.5} 0',
    },
    '@lg': {
      padding: '{space.5} 0',
    },
    '.layout': {
      display: 'grid',
      gap: '{space.16}',
      '@lg': {
        gap: '{space.8}',
        gridTemplateColumns: 'repeat(3, minmax(0, 1fr))'
      }
    },
    '.content': {
      '@lg': {
        gridColumn: 'span 3 / span 3'
      },
      '.announce': {
        marginBottom: '{space.4}',
        textAlign: 'center',
        '@lg': {
          textAlign: 'center'
        }
      },
      '.title': {
        color: '{elements.text.primary.color.static}',
        fontWeight: '{fontWeight.bolder}',
        letterSpacing: '{letterSpacing.tight}',
        textAlign: 'center',
        fontSize: '{text.3xl.fontSize}',
        lineHeight: '{text.3xl.lineHeight}',
        marginBottom: '{space.4}',
        px: '{space.8}',
      },
      '.description': {
        backgroundColor: 'lightgray',
        background: 'rgba(0, 0, 0, 0.1)',
        borderRadius: '10px',
        padding: '5px',
        margin: '0 10px',
        marginBottom: '{space.8}',
        fontSize: '{text.lg.fontSize}',
        lineHeight: '{text.lg.lineHeight}',
        textAlign: 'center',
        color: '{elements.text.secondary.color.static}',
        px: '{space.2}',
        '@lg': {
          textAlign: 'center'
        }
      }
    }
  }
})
</style>

