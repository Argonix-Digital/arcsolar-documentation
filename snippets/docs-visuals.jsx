export const DocIcon = ({ name = 'grid', size = 20 }) => {
  const paths = {
    grid: 'M3 3h7v7H3z M14 3h7v7h-7z M3 14h7v7H3z M14 14h7v7h-7z',
    book: 'M4 4h6a3 3 0 0 1 3 3v14a4 4 0 0 0-4-2H4z M13 7a3 3 0 0 1 3-3h5v15h-4a4 4 0 0 0-4 2',
    customer: 'M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2 M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8 M17 4a4 4 0 0 1 0 7 M22 21v-2a4 4 0 0 0-3-3.87',
    quote: 'M14 2H5v20h14V7z M14 2v6h5 M8 12h8 M8 16h5',
    project: 'M3 7h6l2-3h10v16H3z M3 10h18',
    task: 'M9 12l2 2 5-5 M21 12a9 9 0 1 1-5-8',
    phone: 'M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.2 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.96.36 1.9.7 2.8a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.84.58 2.8.7A2 2 0 0 1 22 16.92z',
    calendar: 'M8 2v4 M16 2v4 M3 10h18 M3 4h18v18H3z M8 14h2 M14 14h2 M8 18h2',
    settings: 'M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8 M12 2v3 M12 19v3 M2 12h3 M19 12h3 M5 5l2 2 M17 17l2 2 M5 19l2-2 M17 7l2-2',
    report: 'M4 3v18h17 M8 16v-4 M13 16V8 M18 16V5',
    roof: 'M2 10l10-8 10 8 M5 9v13h14V9 M8 12h8v6H8z M12 12v6',
    arrow: 'M5 12h14 M13 6l6 6-6 6',
    bolt: 'M13 2L3 14h8l-1 8L21 10h-8z',
    plug: 'M8 2v5 M16 2v5 M6 7h12v4a6 6 0 0 1-12 0z M12 17v5',
  };
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.65" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={paths[name] || paths.grid} /></svg>;
}

export const TopicCard = ({ title, description, href, icon, feature = false }) => {
  const LocalIcon = ({name, size}) => {
  const paths = {
    grid: 'M3 3h7v7H3z M14 3h7v7h-7z M3 14h7v7H3z M14 14h7v7h-7z',
    book: 'M4 4h6a3 3 0 0 1 3 3v14a4 4 0 0 0-4-2H4z M13 7a3 3 0 0 1 3-3h5v15h-4a4 4 0 0 0-4 2',
    customer: 'M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2 M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8 M17 4a4 4 0 0 1 0 7 M22 21v-2a4 4 0 0 0-3-3.87',
    quote: 'M14 2H5v20h14V7z M14 2v6h5 M8 12h8 M8 16h5',
    project: 'M3 7h6l2-3h10v16H3z M3 10h18',
    task: 'M9 12l2 2 5-5 M21 12a9 9 0 1 1-5-8',
    phone: 'M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.2 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.96.36 1.9.7 2.8a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.84.58 2.8.7A2 2 0 0 1 22 16.92z',
    calendar: 'M8 2v4 M16 2v4 M3 10h18 M3 4h18v18H3z M8 14h2 M14 14h2 M8 18h2',
    settings: 'M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8 M12 2v3 M12 19v3 M2 12h3 M19 12h3 M5 5l2 2 M17 17l2 2 M5 19l2-2 M17 7l2-2',
    report: 'M4 3v18h17 M8 16v-4 M13 16V8 M18 16V5',
    roof: 'M2 10l10-8 10 8 M5 9v13h14V9 M8 12h8v6H8z M12 12v6',
    arrow: 'M5 12h14 M13 6l6 6-6 6',
    bolt: 'M13 2L3 14h8l-1 8L21 10h-8z',
    plug: 'M8 2v5 M16 2v5 M6 7h12v4a6 6 0 0 1-12 0z M12 17v5',
  };
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.65" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={paths[name] || paths.grid} /></svg>;
};
  return <a className={'docs-topic' + (feature ? ' docs-topic-feature' : '')} href={href}>
    <div className="docs-topic-art"><LocalIcon name={icon} size={24} /></div>
    <div className="docs-topic-copy"><h3>{title}</h3><p>{description}</p></div>
  </a>;
}

export const NextGuide = ({ href, title, children }) => {
  return <a className="docs-next" href={href}><span><span className="docs-next-label">Continue with</span><strong>{title}</strong>{children && <span>{children}</span>}</span><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><path d="M5 12h14 M13 6l6 6-6 6" /></svg></a>;
}

function Pill({ children, tone = '' }) { return <span className={'preview-pill ' + tone}>{children}</span>; }
function Row({ title, detail, status, tone }) { return <div className="preview-row"><span><strong>{title}</strong>{detail && <small>{detail}</small>}</span>{status && <Pill tone={tone}>{status}</Pill>}</div>; }
function Field({ label, value }) { return <div className="preview-field"><span>{label}</span><strong>{value}</strong></div>; }
function Tabs({ items, active = 0 }) { return <div className="preview-tabs">{items.map((x,i)=><span key={x} className={active===i?'selected':''}>{x}</span>)}</div>; }

function CustomerPreview({ pipeline = false }) {
  if (pipeline) return <><Tabs items={['Pipeline', 'Customer Records']} /><div className="preview-board">{[['New','Alex Morgan','Solar and battery'],['Contacted','Jamie Lee','Bill requested'],['Quoted','Taylor Brooks','Awaiting a decision']].map(([stage,name,detail])=><div key={stage}><span className="preview-column-title">{stage}<small>1</small></span><div className="preview-kanban"><strong>{name}</strong><p>{detail}</p><small>Sam Wilson</small></div></div>)}</div></>;
  return <><div className="preview-toolbar"><span>Customer Records</span><span className="preview-control">Search customers</span></div><div className="preview-table-head"><span>Customer</span><span>Stage</span></div><Row title="Alex Morgan" detail="Solar and battery · Sam Wilson" status="Contacted" /><Row title="Jamie Lee" detail="Battery · Sam Wilson" status="Information requested" /><Row title="Taylor Brooks" detail="Solar · Jordan Chen" status="Quoted" /><div className="preview-note"><DocIcon name="task" size={16} /> Next action: review the bill, then prepare the quote.</div></>;
}

function TaskPreview() { return <><Tabs items={['To do', 'In progress', 'Waiting', 'Completed']} /><Row title="Call Alex about the battery options" detail="Sam Wilson · Today, 3:00 pm" status="To do" /><Row title="Review the electricity bill" detail="Sam Wilson · Tomorrow" status="ArgonixIntelligence" /><Row title="Await customer: switchboard photos" detail="Alex Morgan · Review timing" status="Waiting" /><div className="preview-note">One owner. A clear action. A date to come back to it.</div></>; }
function CommsPreview({ intelligence = false }) { return <><div className="preview-toolbar"><span>{intelligence?'ArgonixIntelligence':'Comms'}</span><Pill>{intelligence?'Call summary':'Alex Morgan'}</Pill></div>{intelligence?<><div className="preview-document"><small>Intelligence notes</small><h3>Ready to review battery options</h3><p>Alex will send a recent electricity bill and switchboard photos before the next call.</p><small>Next steps</small><Row title="Review the uploaded bill" detail="Sam Wilson · Review timing" /></div><div className="preview-note">Calls behind these notes <span className="preview-control">Transcript</span></div></>:<><Tabs items={['Messages', 'Phone']} /><div className="preview-messages"><p>Hi Sam, I’ve uploaded the bill and switchboard photos.</p><p>Thanks Alex. I’ll review those before our call.</p></div><div className="preview-message-input">Message Alex Morgan<span className="preview-control">Send</span></div></>}</>; }
function QuotePreview({ portal = false, compare = false }) { return <><div className="preview-toolbar"><span>{compare?'Compare estimates':portal?'Your solar and battery estimate':'New quote'}</span><Pill>{portal?'Estimate':'Draft'}</Pill></div>{!portal&&!compare&&<Tabs items={['Customer','Site','System','Review & BOM']} active={3} />}{compare?<div className="preview-comparison">{['Option A','Option B'].map((x,i)=><div key={x}><small>{x}</small><h3>{i?'Solar + larger battery':'Solar + battery'}</h3><p>{i?'13.5 kWh':'10 kWh'} battery</p><strong className="preview-price">{i?'$15,500':'$12,500'}</strong><span className="preview-control">Review estimate</span></div>)}</div>:<><div className="preview-document"><small>Alex Morgan</small><h3>Solar + battery</h3><p>6.6 kW solar · 10 kWh battery</p><Field label="Total after rebates" value="$12,500" /><Field label="Deposit" value="$1,000" /><Field label="Remaining balance" value="$11,500" /></div><div className="preview-note">{portal?'Review the agreement and payment schedule before proceeding.':'Check the customer preview before sending.'}<span className="preview-control">{portal?'Review agreement':'Preview'}</span></div></>}</>; }
function BillPreview({ savings = false }) { return <><div className="preview-toolbar"><span>{savings?'Savings estimate':'Review bill assessment'}</span><DocIcon name="bolt" size={18}/></div><div className="preview-split"><div className="preview-paper"><small>{savings?'CURRENT USE':'ELECTRICITY BILL'}</small><h3>{savings?'Review the baseline':'Alex Morgan'}</h3><div className="preview-paper-lines"><i/><i/><i/></div><Field label="Billing period" value="90 days" /><Field label="Grid imports" value="1,200 kWh" /></div><div className="preview-assessment"><small>{savings?'Inputs':'Extracted values'}</small><Field label="Usage rate" value="32 c/kWh" /><Field label="Daily supply charge" value="$1.10" /><Field label="Feed-in tariff" value="5 c/kWh" /><p>{savings?'Confirm the consumption basis and tariff. Savings are indicative.':'Compare these values with the original bill before applying them.'}</p></div></div></>; }
function SitePreview() { return <><div className="preview-toolbar"><span>Site Information Form</span><Pill>Awaiting customer</Pill></div><Row title="Electricity bill" detail="All pages of the most recent bill" status="Uploaded" tone="success" /><Row title="Switchboard photos" detail="The board and the space around it" status="Uploaded" tone="success" /><Row title="Cable-run video" detail="Switchboard to proposed battery location" status="Awaiting customer" /><div className="preview-note">You can continue the quote without these files.</div></>; }
function ProjectPreview({ files = false, work = false }) { return <><div className="preview-toolbar"><span>{work?'Assigned field visit':'Alex Morgan · Solar + battery'}</span><Pill>{work?'Scheduled':'In progress'}</Pill></div><Tabs items={work?['Overview','Site','Forms','Photos & files']:['Overview','Site','System & BOM','Project Files']} active={files?3:0}/>{files?<><Row title="Roof Vision · Site plan" detail="PDF · Current drawing" status="Available" /><Row title="Roof Vision · SLD" detail="PDF · Current drawing" status="Available" /><Row title="Site photos" detail="Customer-supplied evidence" status="3 files" /></>:<><div className="preview-document"><small>{work?'Visit brief':'Installation readiness'}</small><h3>{work?'Review the site before starting':'Prepare the installation'}</h3><Field label="Installer" value="Assigned technician" /><Field label="System & BOM" value="Review equipment" /><Field label="Site information" value="Check outstanding items" /></div><div className="preview-note">{work?'Record progress and verify that evidence has saved.':'Acceptance, deposit and readiness are separate checks.'}</div></>}</>; }
function FinancePreview() { return <><div className="preview-toolbar"><span>Project financials</span><span>Alex Morgan</span></div><div className="preview-stats"><div><small>Quote total</small><strong>$12,500</strong></div><div><small>Collected</small><strong>$1,000</strong></div><div><small>Remaining</small><strong>$11,500</strong></div></div><Row title="Deposit" detail="$1,000 · Confirmed payment" status="Paid" tone="success" /><Row title="Installation balance" detail="$11,500 · Check the issued schedule" status="Outstanding" /><div className="preview-note">A signed agreement and a confirmed payment are separate events.</div></>; }
function CalendarPreview() { return <><div className="preview-toolbar"><span>Calendar</span><span className="preview-control">Week</span></div><div className="preview-calendar">{['Mon 19','Tue 20','Wed 21','Thu 22','Fri 23'].map((d,i)=><div key={d}><small>{d}</small>{i===1&&<p>10:00 am<br/><strong>Site assessment</strong></p>}{i===2&&<p>3:00 pm<br/><strong>Alex Morgan</strong><br/>Follow-up call</p>}{i===3&&<p>9:00 am<br/><strong>Field visit</strong></p>}</div>)}</div><div className="preview-note">Check availability, timezone and buffers before confirming.</div></>; }
function SettingsPreview({ brand = false, contract = false }) { return <><div className="preview-toolbar"><span>Retailer Settings</span><Pill>Selling brand: ArcSolar Demo</Pill></div><Tabs items={['Appearance defaults','Pricing & fees','Payments & finance','Agreements']} active={contract?3:brand?0:2}/><div className="preview-document"><small>{contract?'Customer agreement':brand?'Branding':'Direct payments & deposits'}</small><h3>{contract?'Review, approve, publish':brand?'A consistent customer experience':'Set the payment schedule'}</h3>{contract?<><Row title="Draft agreement" detail="Changes are saved before publishing" status="Draft" /><Row title="Published version" detail="Used for future issued agreements" status="Published" /></>:brand?<><Field label="Customer-facing name" value="ArcSolar Demo" /><Field label="Document appearance" value="Logo, colour and fonts" /></>:<><Field label="Minimum deposit" value="Set by your retailer" /><Field label="Stock delivery payment" value="Percentage of customer balance" /><Field label="Balance" value="Due on installation" /></>}</div></>; }
function IntegrationPreview() { return <><div className="preview-toolbar"><span>Integrations</span><span className="preview-control">Search apps</span></div><div className="preview-integration-grid">{[['Stripe','Customer payments'],['GreenDeal','Application tracking'],['Formbay','Applications and evidence'],['ServiceM8','Field-service jobs']].map(([name,desc])=><div key={name}><DocIcon name="plug" size={19}/><strong>{name}</strong><small>{desc}</small></div>)}</div><div className="preview-note">Verify the business, then check one linked record.</div></>; }
function ReportPreview({ kind = 'report' }) {
  const reporting = ['reporting','phone-report','operations','accountability'].includes(kind);
  const title = reporting ? 'Reporting' : kind==='sales' ? 'Sales' : 'Rep Overview';
  const tabs = reporting ? <Tabs items={['Overview','Sales & Pipeline','Accountability Report','Operations']} active={kind==='phone-report'?1:kind==='accountability'?2:kind==='operations'?3:0}/> : null;
  let rows;
  if(kind==='accountability') rows=<><Row title="Open tasks" detail="Work owned by the member" status="Open"/><Row title="Overdue" detail="Review the owner, blocker and next action" status="Needs attention"/><Row title="Waiting" detail="Still needs follow-up" status="Waiting"/></>;
  else if(kind==='operations') rows=<><Row title="Operational performance" detail="Open the project to inspect delivery progress"/><Row title="Installation readiness" detail="Review installer, equipment and outstanding requirements"/><Row title="Rebate and compliance work" detail="Check source records before close-out"/></>;
  else if(kind==='phone-report') rows=<><Row title="Rep Phone Performance" detail="Sam Wilson · Selected reporting period"/><Field label="Connected talk time" value="2 h 15 m"/><Field label="Answered calls" value="18"/><Field label="Total calls" value="27"/></>;
  else if(kind==='reporting') rows=<><Row title="Customer lifecycle" detail="Volume and conversion over the selected period"/><Row title="Exceptions requiring attention" detail="Open the contributing records"/><Row title="Sales & Pipeline" detail="Lead sources, engagement and phone performance"/></>;
  else if(kind==='sales') rows=<><div className="preview-stats"><div><small>Estimates sent</small><strong>12</strong></div><div><small>Recently won</small><strong>3</strong></div><div><small>Appointments</small><strong>5</strong></div></div><Row title="Qualified Lead Flow" detail="Assigned leads and estimate progress"/><Row title="Recently Won Deals" detail="Review the offer before the delivery handoff"/></>;
  else rows=<><div className="preview-stats"><div><small>Appointments</small><strong>3</strong></div><div><small>Follow-up due</small><strong>5</strong></div><div><small>Open pipeline</small><strong>12</strong></div></div><small className="preview-section-label">Work Requiring Attention</small><Row title="Call Alex Morgan" detail="Today, 3:00 pm" status="To do"/><Row title="Review Jamie’s site information" detail="Awaiting the electricity bill" status="Waiting"/></>;
  return <><div className="preview-toolbar"><span>{title}</span><span>Sam Wilson</span></div>{tabs}<div className={kind==='phone-report'?'preview-document':''}>{rows}</div></>;
}
function ProviderPreview({ kind }) {
 const name={stripe:'Stripe',greendeal:'GreenDeal',formbay:'Formbay',meta:'Meta',servicem8:'ServiceM8'}[kind];
 return <><div className="preview-toolbar"><span>{name}</span><span>Integration</span></div><div className="preview-document"><small>{kind==='meta'?'Lead sync':kind==='stripe'?'Customer payments':'Connection setup'}</small><h3>{kind==='stripe'?'Complete business verification':'Connect the right business'}</h3>{kind==='greendeal'?<><Field label="Account" value="Live account"/><Field label="Client ID" value="Your retailer’s Client ID"/><Field label="Client Secret" value="••••••••••••"/></>:kind==='formbay'?<><Field label="Auth bearer token" value="••••••••••••"/><p>Verify the returned company before connecting.</p></>:kind==='meta'?<><Field label="Page" value="Your business Page"/><Field label="Pixel / Dataset" value="Your selected asset"/></>:<p>{kind==='stripe'?'Continue in Stripe to provide business, identity and payout details.':'Authorise the intended ServiceM8 business, then return to ArcSolar.'}</p>}<span className="preview-control">{kind==='greendeal'?'Verify credentials':kind==='formbay'?'Verify token':kind==='meta'?'Connect Meta':kind==='stripe'?'Set up customer payments':'Connect account'}</span></div></>;
}
function CataloguePreview({ inventory = false }) { return <><div className="preview-toolbar"><span>{inventory?'Inventory':'Product Catalogue'}</span><span className="preview-control">Search products</span></div><Tabs items={inventory?['Stock on Hand','Purchase Orders','Suppliers','Movements']:['Solar panels','Inverters','Batteries']}/><Row title="Solar panel · 440 W" detail={inventory?'Check the location and allocation':'Exact manufacturer and model'} status={inventory?'Stock on hand':'Current'} /><Row title="Hybrid inverter" detail={inventory?'Compare with the project BOM':'Confirm phase compatibility'} status={inventory?'Incoming':'Current'} /><div className="preview-note">{inventory?'Incoming stock has not been received yet.':'Catalogue, brand pricing and stock availability are separate.'}</div></>; }

export const ProductPreview = ({ type = 'customers', caption }) => {
  let content;
  if(type==='customers'||type==='pipeline') content=<CustomerPreview pipeline={type==='pipeline'}/>;
  else if(type==='tasks') content=<TaskPreview/>;
  else if(type==='comms'||type==='intelligence') content=<CommsPreview intelligence={type==='intelligence'}/>;
  else if(['quote','portal','compare'].includes(type)) content=<QuotePreview portal={type==='portal'} compare={type==='compare'}/>;
  else if(type==='bill'||type==='savings') content=<BillPreview savings={type==='savings'}/>;
  else if(type==='site') content=<SitePreview/>;
  else if(['project','files','work'].includes(type)) content=<ProjectPreview files={type==='files'} work={type==='work'}/>;
  else if(type==='finance') content=<FinancePreview/>;
  else if(type==='calendar') content=<CalendarPreview/>;
  else if(['settings','brand','contract'].includes(type)) content=<SettingsPreview brand={type==='brand'} contract={type==='contract'}/>;
  else if(type==='integrations') content=<IntegrationPreview/>;
  else if(['report','sales','reporting','phone-report','operations','accountability'].includes(type)) content=<ReportPreview kind={type}/>;
  else if(['stripe','greendeal','formbay','meta','servicem8'].includes(type)) content=<ProviderPreview kind={type}/>;
  else content=<CataloguePreview inventory={type==='inventory'}/>;
  return <figure className={'docs-figure docs-figure-'+type}><div className="docs-backdrop"><div className="product-preview" role="group" aria-label={caption || 'ArcSolar ' + type + ' preview'}>{content}</div></div>{caption && <figcaption>{caption}</figcaption>}</figure>;
}

export const RoofPreview = () => {
  return <figure className="docs-figure"><div className="docs-backdrop roof-backdrop"><div className="product-preview"><div className="preview-toolbar"><span>Roof Vision</span><span className="preview-control">Open SLD</span></div><div className="preview-tabs"><span>Build</span><span>Strings</span><span>Cabling</span><span>Annot.</span></div><div className="docs-roof-crop"><img src="/images/roof-design-editor-workspace.png" alt="Panel layout over the actual satellite map in Roof Vision. Original Google and Vexcel imagery attribution is retained along the map's bottom edge." /></div></div></div></figure>;
};
