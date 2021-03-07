export interface MovieSetItem {
    equals(other: MovieSetItem): boolean;
}

export class MovieSet<T extends MovieSetItem> extends Set<T> {
    add(value: T): this {
        let found = false;
        this.forEach(item => {
            if (value.equals(item)) {
                found = true;
            }
        });

        if (!found) {
            super.add(value);
        }

        return this;
    }
}