"use client";

import React from "react";
import { Typography } from "@andore-ui/typography";

const Preview = () => {
  return (
      <div className='flex flex-col gap-4'>
          <Typography variant="display" size="lg">
              Display large
          </Typography>
          <Typography variant="display" size="md">
              Display medium
          </Typography>
          <Typography variant="display" size="sm">
              Display small
          </Typography>
          <Typography variant="headline" size="lg">
              Headline large
          </Typography>
          <Typography variant="headline" size="md">
              Headline small
          </Typography>
          <Typography variant="headline" size="sm">
              Headline small
          </Typography>
          <Typography variant="title" size="lg">
              Title small
          </Typography>
          <Typography variant="title" size="md">
              Title small
          </Typography>
          <Typography variant="title" size="sm">
              Title small
          </Typography>
          <Typography variant="body" size="lg">
              Body large
          </Typography>
          <Typography variant="body" size="md">
              Body medium
          </Typography>
          <Typography variant="body" size="sm">
              Body small
          </Typography>
      </div>
  );
};

export default Preview;
