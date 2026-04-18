const data: Node = {
  id: '1',
  type: 'parent',
  data: 'Parent 1',
  children: [
    {
      id: '2',
      type: 'child',
      data: 'Hello',
    },
    {
      id: '3',
      type: 'child',
      data: 'World',
    },
    {
      id: '4',
      type: 'parent',
      data: 'Parent 2',
      children: [
        {
          id: '5',
          type: 'child',
          data: 'Hello',
        },
        {
          id: '6',
          type: 'child',
          data: 'World',
        },
      ],
    },
    {
      id: '7',
      type: 'child',
      data: 'Hello',
    },
    {
      id: '8',
      type: 'parent',
      data: 'World',
      children: [
        {
          id: '9',
          type: 'parent',
          data: 'Hello',
          children: [
            {
              id: '10',
              type: 'child',
              data: 'Hello',
            },
            {
              id: '11',
              type: 'parent',
              data: 'World',
              children: [
                {
                  id: '12',
                  type: 'child',
                  data: 'Hello',
                },
                {
                  id: '13',
                  type: 'child',
                  data: 'World',
                },
              ],
            },
          ],
        },
      ],
    },
  ],
}

type ParentNode = {
  id: string
  type: 'parent'
  data: string
  children: Node[]
}

type ChildNode = {
  id: string
  type: 'child'
  data: string
}

type Node = ParentNode | ChildNode
function RenderData({ key, data }: { key: string; data: Node['data'] }) {
  return <p id={key}>{data}</p>
}

function JSONDisplay({ data }: { data: Node }) {
  return <pre>{JSON.stringify(data, null, 2)}</pre>
}

export function JSONDisplayTest() {
  return (
    <div>
      <JSONDisplay data={data} />
    </div>
  )
}
