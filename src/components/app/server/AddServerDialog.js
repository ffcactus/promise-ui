import React from 'react';
import Button from '../../platform/widgets/Button'
import {
  StyledModal,
  DialogHeaderDiv,
  DialogContentDiv,
  DialogControlDiv,
  DialogInputDiv
} from '../../platform/widgets/Dialog';

export default function AddServerDialog() {
  return (
    <StyledModal isOpen={true}>
      <DialogHeaderDiv>Add Server</DialogHeaderDiv>
      <DialogContentDiv>
        <DialogInputDiv>
          <lu>
            <li>Add a single server.</li>
            <li>Add server from Excel file.</li>
          </lu>
        </DialogInputDiv>
      </DialogContentDiv>
      <DialogControlDiv>
        <section>
          <Button>Cancel</Button>
          <Button primary>Submit</Button>
        </section>
      </DialogControlDiv>
    </StyledModal>
  )
} 