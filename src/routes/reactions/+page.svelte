<script lang="ts">
  import { matrices, type Matrix } from "$lib/data/matrices";
  import * as Tabs from "$lib/components/ui/tabs";
  import * as Card from "$lib/components/ui/card";
  import { Button } from "$lib/components/ui/button";

  const matrixNames = Object.keys(matrices) as (keyof typeof matrices)[];

  function getMatrixMappings(matrix: Matrix) {
    return Object.entries(matrix.mappings) as [string, Record<string, number | null>][];
  }
</script>

<svelte:head>
  <title>Reaction Matrices</title>
</svelte:head>

<div class="container mx-auto px-4 py-6 space-y-6 md:py-8">
  <div>
    <Button variant="link" href="/" class="px-0 mb-2">&larr; Back to Encounter Lookup</Button>
    <h1 class="text-2xl md:text-3xl font-bold">Reaction Matrices</h1>
  </div>

  <Tabs.Root value="A" class="w-full">
    <Tabs.List class="mb-8 h-auto flex flex-wrap gap-2 p-2 rounded-lg">
      {#each matrixNames as name}
        <Tabs.Trigger value={name} class="px-4 py-2">
          {name}
        </Tabs.Trigger>
      {/each}
    </Tabs.List>

    {#each matrixNames as name}
      {@const matrix = matrices[name]}
      <Tabs.Content value={name}>
        <Card.Root>
          <Card.Header>
            <Card.Title>Matrix {matrix.name}</Card.Title>
          </Card.Header>
          <Card.Content class="overflow-x-auto px-3 md:px-6">
            <table class="w-full text-sm">
              <thead>
                <tr>
                  <th class="min-w-[100px] md:w-40"></th>
                  {#each matrix.actions as action}
                    <th class="px-2 md:px-3 py-2 text-center font-semibold">
                      {action}
                    </th>
                  {/each}
                </tr>
              </thead>
              <tbody>
                {#each getMatrixMappings(matrix) as [description, actionMap], i}
                  <tr class={i % 2 === 0 ? "bg-muted/50" : ""}>
                    <td class="py-2 pr-2 md:pr-4 font-semibold">
                      {description}
                    </td>
                    {#each matrix.actions as action}
                      {@const value = actionMap[action]}
                      <td class="px-2 md:px-3 py-2 text-center tabular-nums">
                        {#if value === null}
                          <span class="text-muted-foreground">—</span>
                        {:else}
                          {value}
                        {/if}
                      </td>
                    {/each}
                  </tr>
                {/each}
              </tbody>
            </table>
          </Card.Content>
        </Card.Root>
      </Tabs.Content>
    {/each}
  </Tabs.Root>
</div>
