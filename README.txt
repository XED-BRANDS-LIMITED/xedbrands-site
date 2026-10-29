XED BRANDS WEBSITE UPDATE PACKAGE
=================================
This package has NOT been published. The live site is unchanged until you upload it.

CONTENTS
  index.html            page structure (permanent sections + marked seasonal blocks)
  css/main.css          permanent identity (black/red/gold), gallery, layout
  css/seasonal.css      TEMPORARY Christmas/New Year styling
  js/main.js            menu, slideshow (auto + previous/next + dots)
  js/seasonal.js        TEMPORARY snow, gold sparkle, twinkling lights
  assets/               your four supplied images, unedited

SAFE UPLOAD STEPS
  1. BACKUP FIRST: in your GitHub repo, make sure the current site is committed.
     Optionally download it (Code > Download ZIP) or create a branch named
     "website-backup". Commit message suggestion: "Website foundation backup".
  2. Best practice: create a new branch (e.g. "christmas-2026"), upload these files
     there (Add file > Upload files; drag in the folders), and commit:
     "Add Christmas and New Year campaign".
  3. If the new files replace an existing index.html, GitHub keeps the old one in
     commit history. Do not delete other files in your repo (e.g. CNAME) - your
     custom domain depends on the CNAME file.
  4. Check the result, then merge the branch (or commit to main) to publish.

RECOVERING AN EARLIER VERSION
  Repo > Commits > open an older commit > browse files, or use "Revert" on the
  commit to undo it. Nothing is lost once committed.

ENDING THE SEASONAL CAMPAIGN
  Quick off switch: delete  data-season="christmas"  from the <body> tag.
  Full removal: also delete css/seasonal.css, js/seasonal.js, the two lines in
  index.html marked "SEASONAL LAYER", and any element with data-seasonal.
  Commit: "Remove seasonal decorations after the holidays".

ADDING A PRODUCT IMAGE LATER
  Put the image in assets/, then copy one <figure class="slide"> and one
  <figure class="gallery-card"> in index.html (see the comment there).
  Commit: "Add product gallery images".

PRIVACY NOTES
  Image filenames, alt text and captions are generic. Images are unedited, exactly
  as supplied. Please re-check each image for any wording you do not want public.
  Contact details are exactly as approved; no direct-call number is published.

NOT TESTED
  Not tested on a real GitHub Pages deployment or on physical phones. Open
  index.html locally in your browser to preview before uploading.
