import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { P, H1, H2, H3, H4, H5, H6, A } from 'src/components/Typography'

storiesOf('Typography', module)
  .add('Headers', () => (
    <React.Fragment>
      <H1>Header</H1>
      <H2>Header</H2>
      <H3>Header</H3>
      <H4>Header</H4>
      <H5>Header</H5>
      <H6>Header</H6>
    </React.Fragment>
  ))
  .add('Paragraph', () => (
    <P>
      Utinam audiam partiendo in nec, in nec semper tritani expetendis, in qui
      minim expetenda. Quo agam prompta explicari ut, an eripuit ornatus
      quaerendum sit, unum convenire assentior nec ei. Has eu zril vocibus,
      diceret deleniti at eum. Pri iusto ubique reformidans cu, saepe oratio
      officiis est an. At mei primis mediocrem disputando, recteque electram
      consulatu ea his. Usu zril conceptam ut. Sit audire legendos persequeris
      cu.
    </P>
  ))
  .add('Anchor', () => <A href="#">Some simple anchor</A>)
