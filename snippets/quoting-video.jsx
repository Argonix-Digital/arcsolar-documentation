export const QuotingVideo = ({ label }) => (
  <video
    controls
    playsInline
    preload="metadata"
    style={{ width: "100%", height: "auto" }}
    poster="/videos/quoting-walkthrough.jpg"
    src="/videos/quoting-walkthrough.mp4"
    aria-label={label}
    onPlay={(event) => {
      const video = event.currentTarget;
      if (video.textTracks.length) return;
      const track = video.addTextTrack("captions", "Step-by-step guide", "en");
      const cues = [
        [0, 14, "Create a practice quote, one step at a time.\nThis video uses fictional demo data. Nothing is sent."],
        [14, 42, "Search for the existing customer.\nCheck the linked opportunity and contact details."],
        [46, 62, "Open Form to request missing site information.\nThe demo request does not send an email or SMS."],
        [62, 77, "Load the fictional bill, then select\nAssess bill with ArgonixIntelligence."],
        [77, 87, "Review the suggested values and supporting evidence.\nIn a live quote, check these against the actual bill."],
        [87, 95, "Choose solar, battery, or both.\nOnly the equipment steps you need will appear."],
        [95, 109, "The checked bill values carry into Energy profile.\nConfirm usage, tariff and existing solar details."],
        [109, 126, "Choose the solar package and panel model.\nUse equipment approved by your retailer."],
        [126, 143, "Generate and review the proposed roof layout.\nThis is a demo model, not a site assessment."],
        [143, 163, "Review battery options, then choose the brand,\ninverter series and exact battery package."],
        [163, 171, "Check installation conditions and cable-run allowances.\nThe example uses an 8-metre allowance."],
        [171, 198, "Review savings inputs and calculation assumptions.\nModelled savings are not a guarantee or investment return."],
        [198, 211, "Review the materials, incentive date and agreement details.\nSelect the choices that match the actual sale."],
        [211, 221, "Price adjustment is the commission adjustment field.\nUse an approved amount and recheck the customer total."],
        [221, 246, "Compare direct payment and finance terms.\nFinance illustrations remain subject to lender approval."],
        [246, 258, "Choose the payment option and add customer-facing notes.\nSelect Preview quote. Nothing is sent yet."],
        [258, 286, "Check the customer, system, total and notes.\nReview the roof visual and savings information."],
        [286, 299.5, "Stop here when practising. Do not confirm and send.\nGet your manager's approval before your first live quote."],
      ];
      cues.forEach(([start, end, text]) => track.addCue(new VTTCue(start, end, text)));
      track.mode = "showing";
    }}
  />
);
