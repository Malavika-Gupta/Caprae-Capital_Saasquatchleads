def filter_leads(leads, filters):
    keywords = [kw.lower() for kw in filters.get("keywords", [])]
    tech_stacks = [ts.lower() for ts in filters.get("tech_stack", [])]

    def matches(lead):
        text = f"{lead['description']} {lead.get('tech_stack', '')}".lower()
        return (
            any(kw in text for kw in keywords) or
            any(ts in text for ts in tech_stacks)
        )

    return [lead for lead in leads if matches(lead)]
