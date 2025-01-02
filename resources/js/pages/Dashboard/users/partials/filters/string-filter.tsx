import { Button, Popover } from '@/components/ui';
import { XIcon } from 'lucide-react';

type StringFilterProps = {
    fieldName?: string;
    operator?: string;
    value?: string;
    setActiveFilters: React.Dispatch<React.SetStateAction<string[]>>;
};

export default function StringFilter({
    fieldName = 'Name',
    operator = '!=*',
    value = 'cool',
    setActiveFilters
}: StringFilterProps) {
    return (
        <Popover>
            <div className="flex items-center gap-2 pr-2  rounded-md bg-colors-primary w-fit overflow-hidden cursor-pointer">
                <Button className="[all:unset] flex items-center !p-2 ">
                    <div>
                        <span>{fieldName}</span> <span>{operator}</span> <span className="italic">{value}</span>
                    </div>
                </Button>
                <XIcon
                    size={14}
                    color="#ccc"
                    className="hover:rotate-180  transition-all duration-500"
                    onClick={() => {
                        setActiveFilters((value) => {
                            console.log('active values : ', value);
                            return value;
                        });
                    }}
                />
            </div>
            <Popover.Content className="min-w-72">
                <Popover.Header>
                    <Popover.Title>Email</Popover.Title>
                    <Popover.Description>We'll send you an email to log in.</Popover.Description>
                </Popover.Header>
                <Popover.Footer>
                    <Button>Send Login Link</Button>
                </Popover.Footer>
            </Popover.Content>
        </Popover>
    );
}
