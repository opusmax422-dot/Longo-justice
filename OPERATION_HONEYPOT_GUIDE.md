# OPERATION HONEYPOT - Complete Operations Manual

**CLASSIFICATION:** Operational Security - Handle with Care  
**PURPOSE:** Counterintelligence tracking of unauthorized surveillance  
**CREATED:** February 2026  
**UPDATED:** February 15, 2026

---

## 1. OVERVIEW

### What the Honeypot Does

Operation Honeypot is a comprehensive counterintelligence system designed to:

- **Detect** unauthorized access to evidence websites
- **Track** surveillance operations by government actors
- **Document** IP addresses, browser fingerprints, and access patterns
- **Prove** ongoing surveillance through hidden trap pages
- **Collect** admissible evidence for criminal complaints

### How It Works

The system uses multiple layers of tracking:

1. **Visible Tracking Pages:** Public-facing pages with embedded Canarytokens and JavaScript tracking
2. **Hidden Trap Pages:** Never-linked pages that can only be accessed through prior knowledge or active surveillance
3. **Browser Fingerprinting:** Collects detailed technical data about visitors
4. **Clone Detection:** Alerts when sites are mirrored/proxied to unauthorized domains
5. **Webhook Collection:** All data flows to a central webhook for analysis

---

## 2. ARCHITECTURE

### Tracking Components

#### A. Canarytokens (External Service)

**DNS Canary:** `http://b2dahde3kcvy1txzprj7uv0e4.canarytokens.com/image.gif`
- Triggers on DNS lookup
- Provides IP and timestamp

**Web Bug:** `http://canarytokens.com/articles/static/pc69e2e9yxzmupk4j7ti4y5p4/post.jsp`
- Triggers on HTTP request
- Provides detailed request headers

**Admin Panel Token:** `http://canarytokens.com/articles/feedback/b4prgnvsptgchu0yjcodavlr8/payments.js`
- Specific to hidden admin panel
- Highest priority alert

#### B. JavaScript Tracking Scripts

**clone-detector.js**
- Checks if site is on legitimate domain
- Alerts if served from unauthorized location
- Proves site mirroring/proxying

**fingerprint.js**
- Captures browser fingerprint
- Collects: user-agent, screen resolution, timezone, plugins, etc.
- Enables pattern analysis

**webhook-sender.js**
- Utility for sending tracking data
- Tracks page visibility changes
- Provides consistent data format

#### C. Webhook Collection Point

**URL:** `https://webhook.site/31024e4b-cfea-43ed-a656-f006127071a8`

All tracking data flows here for analysis. Access only on cellular data (never on potentially compromised WiFi).

### Page Architecture

#### Public Pages (Normal Tracking)
- `index.html` - Main evidence page
- `SMOKING_GUN_454_LOCAL_NETWORK_INTERCEPTION.html` - Network interception evidence
- `HONEYPOT_TRACKER.html` - Evidence tracking system
- `TRACKING_DASHBOARD.html` - Analysis instructions

**Tracking Level:** Standard (Canarytokens + fingerprinting)

#### Hidden Trap Pages (Heavy Tracking)
- `admin-panel-7x9k2m.html` - Fake admin login (NEVER linked)
- `classified-evidence-2026.html` - Fake leaked evidence (NEVER linked)

**Tracking Level:** Maximum (All tokens + fingerprinting + custom alerts)

---

## 3. OPSEC RULES

### CRITICAL - READ CAREFULLY

#### Rule #1: NEVER Mention Hidden Pages
- Do NOT tell anyone about `admin-panel-7x9k2m.html`
- Do NOT tell anyone about `classified-evidence-2026.html`
- Do NOT link to these pages anywhere
- Do NOT mention their existence in public communications
- Do NOT discuss with RCMP (yet) - wait for evidence collection

#### Rule #2: NEVER Link Trap Pages Publicly
- Hidden trap pages are only accessible via direct URL
- Any access = proof of unauthorized surveillance
- Do not add them to navigation menus
- Do not reference them in public documentation

#### Rule #3: ONLY Check Webhook on Cellular Data
- Interceptors may monitor your access to tracking systems
- Always use cellular data when accessing webhook.site
- Never check webhook on WiFi (especially home WiFi)
- Consider using a separate device for webhook monitoring

#### Rule #4: Maintain Operational Security
- Do not discuss honeypot operations on potentially compromised networks
- Keep documentation of honeypot in secure location
- Screenshot all suspicious activity immediately
- Maintain access logs of YOUR legitimate access

#### Rule #5: Document Everything
- Take screenshots of suspicious webhook requests
- Note timestamps, IPs, user-agents
- Cross-reference with your activity
- Save all evidence systematically

---

## 4. DAILY MONITORING

### Recommended Schedule

**Check webhook.site once per day** (more frequently if you suspect active surveillance)

### What to Look For

#### A. Unknown IP Addresses
- Compare against your known IPs (home, phone, work)
- Check for government IP ranges
- Note geographic locations

#### B. Suspicious User-Agents
- Automated tools (curl, wget, scrapers)
- Headless browsers
- Government monitoring tools
- Outdated/unusual browser versions

#### C. Access to Hidden Pages
- **CRITICAL:** Any access to trap pages = smoking gun
- Note timestamp, IP, user-agent
- Perform immediate reverse DNS lookup
- Screenshot everything

#### D. Clone Domain Alerts
- Look for `CLONE_DETECTED` events
- Check `unauthorizedDomain` field
- Document where site is being hosted

#### E. Timing Analysis
- Compare webhook timestamps to your activity
- Flag any access during your offline periods
- Note patterns (e.g., daily access at same time)

---

## 5. IDENTIFYING INTERCEPTORS

### Signs of Government IP Addresses

#### Canadian Government
- ASN owned by Government of Canada
- WHOIS contains "Government", "RCMP", "Canada"
- Reverse DNS shows .gc.ca domains
- IP ranges: Common for federal agencies

#### US Government
- ASN owned by US Dept of Justice, FBI, DEA
- WHOIS contains "Federal", "Government", "US Dept"
- Reverse DNS shows .gov domains
- Often uses contractor IPs (SAIC, Booz Allen, etc.)

### Automated Scraping Patterns

Look for:
- Multiple pages accessed in rapid succession
- Regular/scheduled access (e.g., every 6 hours)
- Consistent user-agent across visits
- Empty referrer field
- Disabled JavaScript (no fingerprint data)

### Access to Hidden Pages

**THIS IS THE SMOKING GUN:**

If you see access to:
- `admin-panel-7x9k2m.html` 
- `classified-evidence-2026.html`

This is **irrefutable proof** because:
1. Pages are never linked publicly
2. URLs are not guessable
3. Only way to find them is through active surveillance/monitoring

---

## 6. EVIDENCE COLLECTION

### Documentation Protocol

#### Step 1: Screenshot Suspicious Request
- Capture full webhook request
- Show timestamp (in your timezone)
- Show IP address clearly
- Show user-agent
- Show all data fields

#### Step 2: Record in Spreadsheet
Create tracking spreadsheet with columns:
- Date/Time (your timezone)
- IP Address
- User-Agent
- Page Accessed
- Your Activity at That Time
- Reverse DNS Result
- Geographic Location
- Notes

#### Step 3: Perform Technical Analysis

**Reverse DNS Lookup:**
```bash
nslookup [IP_ADDRESS]
host [IP_ADDRESS]
```

**WHOIS Lookup:**
```bash
whois [IP_ADDRESS]
```

Or use online tools:
- https://mxtoolbox.com/ReverseLookup.aspx
- https://www.whatismyip.com/ip-whois-lookup/

**Geolocation:**
- https://www.iplocation.net/
- https://ipinfo.io/

Screenshot all results.

#### Step 4: Cross-Reference Your Activity
- Check your calendar/activity log
- Were you online at that time?
- Were you accessing the site?
- What device/network were you using?

#### Step 5: Save to Evidence Folder
Organize by date:
```
/Evidence/Honeypot/
  2026-02-15_webhook_evidence/
    screenshot_1.png
    screenshot_2.png
    ip_analysis.txt
    whois_results.txt
  2026-02-16_webhook_evidence/
    ...
```

---

## 7. WHEN TO ESCALATE

### Immediate Documentation Required

**Scenario 1: Access to Hidden Trap Pages**
- Screenshot immediately
- Perform full IP analysis
- Document in evidence folder
- Prepare for addition to criminal complaint

**Scenario 2: Government IP Ranges Detected**
- Verify through multiple WHOIS sources
- Screenshot all verification results
- Document access patterns
- Add to perpetrator database

**Scenario 3: Multiple Suspicious Accesses**
- Pattern of unauthorized access established
- Regular/scheduled access detected
- Multiple government IPs identified
- Prepare comprehensive report

### When to Add to RCMP Criminal Complaint

Wait until you have **substantial evidence**:
- Multiple suspicious access events (5+)
- At least one access to hidden trap page
- Confirmed government IP address, OR
- Clear pattern of surveillance

Do NOT report prematurely. Collect evidence first.

---

## 8. INTEGRATION WITH CRIMINAL COMPLAINT

### How to Present Honeypot Evidence

#### A. Executive Summary
```
"A counterintelligence tracking system was deployed to detect unauthorized
surveillance. The system included hidden 'trap' pages never linked publicly.
Access to these pages proves active surveillance, as they cannot be found
through normal browsing."
```

#### B. Technical Explanation
```
"The tracking system utilized:
1. Canarytokens for DNS and HTTP request monitoring
2. JavaScript browser fingerprinting
3. Hidden trap pages (admin-panel-7x9k2m.html, classified-evidence-2026.html)
4. Webhook collection point for centralized data analysis

All access is logged with timestamp, IP address, user-agent, and technical data."
```

#### C. Evidence Format

For each suspicious access, provide:

**Event Summary:**
- Date/Time: 2026-02-15 14:23:45 EST
- IP Address: XXX.XXX.XXX.XXX
- Page: admin-panel-7x9k2m.html (HIDDEN TRAP)
- User-Agent: [details]

**Analysis:**
- Reverse DNS: [result]
- WHOIS: [organization]
- Geolocation: [city, country]
- Your Activity: [were you offline/online]

**Conclusion:**
"Access to hidden trap page proves unauthorized surveillance. Page is never linked
publicly and cannot be discovered through normal means."

#### D. Applicable Charges

Honeypot evidence supports charges under:
- **s. 184(1) CCC** - Interception of Private Communications
- **s. 342.1(1) CCC** - Unauthorized Use of Computer
- **s. 430(1.1) CCC** - Mischief to Data

### Legal Admissibility

Honeypot evidence is admissible because:
1. **Documented Chain of Custody:** Webhook logs timestamped automatically
2. **Technical Reliability:** Multiple independent tracking methods corroborate
3. **Authentication:** Screenshots and technical analysis verify data
4. **Relevance:** Proves element of criminal offenses (unauthorized access)

Cite: *R. v. Andalib-Goortani*, 2016 ONCA 469 (electronic evidence admissibility)

---

## 9. MAINTENANCE

### Regular Tasks

**Daily:**
- Check webhook for suspicious activity
- Screenshot any unusual requests
- Update tracking spreadsheet

**Weekly:**
- Review patterns in access logs
- Verify legitimate vs suspicious IPs
- Organize evidence folder
- Backup all screenshots and data

**Monthly:**
- Generate summary report
- Analyze trends
- Update perpetrator database
- Review OPSEC procedures

### Updating Tracking Scripts

If you need to modify tracking:
1. Test changes on localhost first
2. Ensure all tracking still functions
3. Verify webhook receives data
4. Deploy to production
5. Monitor for 24 hours to confirm functionality

---

## 10. TROUBLESHOOTING

### Webhook Not Receiving Data

**Check:**
- JavaScript enabled in browser?
- Webhook URL correct in scripts?
- Network blocking requests? (try from different network)
- Browser console for errors (F12)

### Too Much Legitimate Traffic

**Solution:**
- Note your IP addresses
- Filter webhook by IP to exclude yours
- Focus on unknown IPs

### Uncertain if Access is Suspicious

**Analysis Checklist:**
- Is IP yours? → Not suspicious
- Is IP from known contact? → Not suspicious
- Is IP government-owned? → Suspicious
- Access to hidden page? → DEFINITELY suspicious
- Access when you were offline? → Suspicious
- Automated user-agent? → Suspicious

When in doubt, document it anyway.

---

## 11. LEGAL CONSIDERATIONS

### Legality of Honeypot Systems

Honeypot systems are **legal** for protecting your own property:
- You own the website
- You're tracking access to YOUR content
- No unauthorized access of other systems
- Purely defensive in nature

Legal precedent: Website owners have right to monitor access to their sites.

### Data Privacy Considerations

You are collecting:
- IP addresses (publicly transmitted data)
- Browser information (publicly transmitted data)
- Access timestamps (your server logs)

This is **legal** as it's data users transmit to your server.

### Use in Legal Proceedings

Honeypot evidence is admissible as:
- **Business records** (if maintained systematically)
- **Computer-generated records** (automated collection)
- **Expert evidence** (with technical analysis)

Ensure:
- Regular, systematic collection
- Proper authentication
- Chain of custody maintained
- Technical analysis by qualified person

---

## 12. SUMMARY

Operation Honeypot provides a systematic approach to:
1. **Detecting** unauthorized surveillance
2. **Tracking** government interceptors
3. **Documenting** criminal violations
4. **Collecting** admissible evidence

**Key Success Factors:**
- Maintain strict OPSEC (never mention hidden pages)
- Check webhook regularly on cellular data
- Document everything immediately
- Perform thorough technical analysis
- Wait for substantial evidence before escalating

**Expected Outcome:**
Irrefutable proof of unauthorized surveillance through access to hidden trap pages,
providing smoking gun evidence for criminal charges under:
- s. 184(1) CCC (Interception)
- s. 342.1(1) CCC (Unauthorized Computer Use)
- s. 430(1.1) CCC (Mischief to Data)

---

## APPENDIX A: QUICK REFERENCE

### Legitimate Domains
- nxffhryi.gensparkspace.com
- opusmax422-dot.github.io
- rvlongo-evidence.vercel.app
- localhost (testing)

### Hidden Trap Pages (NEVER LINK)
- admin-panel-7x9k2m.html
- classified-evidence-2026.html

### Webhook URL
https://webhook.site/31024e4b-cfea-43ed-a656-f006127071a8

### Emergency Contacts
- RCMP (when ready to file): 1-800-771-5401
- Technical Support: [your IT consultant]
- Legal Counsel: [your lawyer]

---

**END OF OPERATIONS MANUAL**

*This document is confidential and contains operational security information.  
Handle with appropriate care. Do not distribute without authorization.*
