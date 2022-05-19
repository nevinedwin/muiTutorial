import React, { useState } from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material'
// Accordian components allows the user  to show and hide sessions of related content on page

const MuiAccordion = () => {

    const [expanded, setExpanded] = useState<string | false>(false)

    const handleChange = (isExpanded: boolean, panel: string) => {
        setExpanded(isExpanded ? panel : false)
    }

    return (
        <div>
            <Accordion expanded={expanded === 'panel1'} onChange={(event, isExpanded) => handleChange(isExpanded, 'panel1')}>
                <AccordionSummary
                    id='panel1-header'
                    aria-label='panel1-content'
                // expandIcon={<ExpandMoreIcon />}
                >

                    <Typography>
                        Accordion 1
                    </Typography>


                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae explicabo quos ad minima dolorem dolorum rem nisi, nostrum ab ratione corporis beatae optio, facere deserunt enim eum cupiditate dicta. Aspernatur.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel2'} onChange={(event, isExpanded) => handleChange(isExpanded, 'panel2')}>
                <AccordionSummary
                    id='panel2-header'
                    aria-label='panel2-content'
                // expandIcon={<ExpandMoreIcon />}
                >

                    <Typography>
                        Accordion 2
                    </Typography>


                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae explicabo quos ad minima dolorem dolorum rem nisi, nostrum ab ratione corporis beatae optio, facere deserunt enim eum cupiditate dicta. Aspernatur.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel3'} onChange={(event, isExpanded) => handleChange(isExpanded, 'panel3')}>
                <AccordionSummary
                    id='panel3-header'
                    aria-label='panel3-content'
                // expandIcon={<ExpandMoreIcon />}
                >

                    <Typography>
                        Accordion 3
                    </Typography>


                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae explicabo quos ad minima dolorem dolorum rem nisi, nostrum ab ratione corporis beatae optio, facere deserunt enim eum cupiditate dicta. Aspernatur.
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    )
}

export default MuiAccordion