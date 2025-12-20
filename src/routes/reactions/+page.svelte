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

<div class="container mx-auto px-4 py-8">
  <Button variant="link" href="/" class="px-0">&larr; Back to Encounter Lookup</Button>
  <h1 class="mb-8 mt-4 text-3xl font-bold">Reaction Matrices</h1>

  <Tabs.Root value="A" class="w-full">
    <Tabs.List class="mb-4 flex flex-wrap gap-1">
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
          <Card.Content class="overflow-x-auto">
            <table class="w-full text-sm">
              <thead>
                <tr>
                  <th class="w-40"></th>
                  {#each matrix.actions as action}
                    <th class="px-3 py-2 text-center font-semibold">
                      {action}
                    </th>
                  {/each}
                </tr>
              </thead>
              <tbody>
                {#each getMatrixMappings(matrix) as [description, actionMap], i}
                  <tr class={i % 2 === 0 ? "bg-muted/50" : ""}>
                    <td class="py-1.5 pr-4 font-semibold">
                      {description}
                    </td>
                    {#each matrix.actions as action}
                      {@const value = actionMap[action]}
                      <td class="px-3 py-1.5 text-center tabular-nums">
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
