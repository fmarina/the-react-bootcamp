>[GP] [P] [C] [GC] APP just rendered
>[👴🏼] [ ] [ ] [ ] rendered
>[ ] [👩🏼‍⚕️] [ ] [ ] rendered
>[ ] [ ] [🧒🏻] [ ] rendered
>[ ] [ ] [ ] [👶🏻] rendered
>[ ] [ ] [ ] [👶🏻] rendered
>[ ] [ ] [🧒🏻] [ ] rendered
>[ ] [ ] [ ] [👶🏻] rendered
>[ ] [ ] [ ] [👶🏻] rendered
>[ ] [👩🏼‍⚕️] [ ] [ ] rendered
>[ ] [ ] [🧒🏻] [ ] rendered
>[ ] [ ] [ ] [👶🏻] rendered
>[ ] [ ] [ ] [👶🏻] rendered
>[ ] [ ] [🧒🏻] [ ] rendered
>[ ] [ ] [ ] [👶🏻] rendered
>[ ] [ ] [ ] [👶🏻] rendered
>[👴🏼] [ ] [ ] [ ] rendered
>[ ] [👩🏼‍⚕️] [ ] [ ] rendered
>[ ] [ ] [🧒🏻] [ ] rendered
>[ ] [ ] [ ] [👶🏻] rendered
>[ ] [ ] [ ] [👶🏻] rendered
>[ ] [ ] [🧒🏻] [ ] rendered
>[ ] [ ] [ ] [👶🏻] rendered
>[ ] [ ] [ ] [👶🏻] rendered
>[ ] [👩🏼‍⚕️] [ ] [ ] rendered
>[ ] [ ] [🧒🏻] [ ] rendered
>[ ] [ ] [ ] [👶🏻] rendered
>[ ] [ ] [ ] [👶🏻] rendered
>[ ] [ ] [🧒🏻] [ ] rendered
>[ ] [ ] [ ] [👶🏻] rendered
>[ ] [ ] [ ] [👶🏻] rendered

Modificamos nuestro GrandParent component y ahora extiende de PureComponent.
Si en AppComponent a nuestro GrandParent le pasamos como propr hello
<GrandParent hello="Marina" />

[GP] [P] [C] [GC] APP just rendered

Pero si le pasamos como prop el state de count
<GrandParent count={this.state.count} />
Renderiza tan solo estos =>
>[GP] [P] [C] [GC] APP just rendered
>[👴🏼] [ ] [ ] [ ] rendered
>[ ] [👩🏼‍⚕️] [ ] [ ] rendered
>[ ] [ ] [🧒🏻] [ ] rendered
>[ ] [ ] [ ] [👶🏻] rendered
>[ ] [ ] [ ] [👶🏻] rendered
>[ ] [ ] [🧒🏻] [ ] rendered
>[ ] [ ] [ ] [👶🏻] rendered
>[ ] [ ] [ ] [👶🏻] rendered
>[ ] [👩🏼‍⚕️] [ ] [ ] rendered
>[ ] [ ] [🧒🏻] [ ] rendered
>[ ] [ ] [ ] [👶🏻] rendered
>[ ] [ ] [ ] [👶🏻] rendered
>[ ] [ ] [🧒🏻] [ ] rendered
>[ ] [ ] [ ] [👶🏻] rendered
>[ ] [ ] [ ] [👶🏻] rendered

PERO ESTO NO ES LO MEJOR. SE PUEDE MEJORAR ASI:
Si importamos y extendemos Nuesto component Patent.js a PureComponent ->
>[GP] [P] [C] [GC] APP just rendered
>[👴🏼] [ ] [ ] [ ] rendered

Y hacer lo mismo con Child y que extienda de PureComponent.

Esto es una forma muy facil y sencilla de optimizar